<?php

namespace App\Http\Controllers;

use App\Jobs\SendMessageMailJob;
use App\Models\Chat;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Mascota;
use Illuminate\Http\Request;
use App\Notifications\ChatNotification;
use Illuminate\Notifications\DatabaseNotification;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$chats = Chat::obtenerChatsDeUsuario(auth()->user()->id);
        //$notificaciones = auth()->user()->unreadNotifications;
        
        return Inertia::render("Chats");
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'mascotaId' => 'required',
            'contenido' => 'required',
        ]);

        $userId = auth()->user()->id;

        $chat = Chat::where('mascota_id', $request->mascotaId)
                ->where(function ($query) use ($userId) {
                    $query->where('owner_id', $userId)
                        ->orWhere('user_id', $userId);
                })
                ->first();

        if($chat != null) {

            $message = $chat->mensajes()->create([
                'user_id' => $userId,
                'contenido' => $request->contenido,
            ]);

            $user = null;

            if($userId == $chat->owner_id)
            {
                $user = User::find($chat->user_id);
            } else {
                $user = User::find($chat->owner_id);
            }

            $user->notify(new ChatNotification([
                'chat_id' => $chat->id,
                'message_id' => $message->id,
                'user' => [
                    'photo' => $user->photo,
                    'name' => $user->name,
                    'mensaje' => $message->contenido,
                ]
            ]));

            return [
                "mensaje" => "Mensaje enviado",
            ];

        } else {

            $mascota = Mascota::find($request->mascotaId);

            if($mascota->usuario->id === $userId) {
                return response([
                    "mensaje" => "Acción no permitida",
                ], 409);
            };
            
            $nuevoChat = Chat::create([
                'user_id' => $userId,
                'owner_id' => $mascota->usuario->id,
                'mascota_id' => $mascota->id,
            ]);

            $message = $nuevoChat->mensajes()->create([
                'user_id' => $userId,
                'contenido' => $request->contenido,
            ]);

            $mascota->usuario->notify((new ChatNotification([
                'chat_id' => $nuevoChat->id,
                'message_id' => $message->id,
            ])));

            SendMessageMailJob::dispatch([
                'email' => $mascota->usuario->email,
                'name' => $mascota->usuario->name,
                'user' => [
                    'photo' => $mascota->usuario->photo,
                    'name' => $mascota->usuario->name,
                    'mensaje' => $message->contenido,
                ]
            ]);

            return [
                "mensaje" => "Mensaje enviado",
            ];
        }
    }

    public function show($id)
    {
        return Inertia::render("Chat", [
            'id' => $id,
        ]);
    }

    public function myChats()
    {
        $chats = Chat::obtenerChatsDeUsuario(auth()->user()->id);
        $notificaciones = auth()->user()->unreadNotifications;

        return [
            "chats" => $chats,
            "notificaciones" => $notificaciones,
        ];
    }

    public function chat($id)
    {
        $chat = Chat::with([
            "mensajes:id,contenido,chat_id,user_id,created_at", 
            "owner:id,name", 
            "usuario:id,name", 
            "mascota"
        ])->find($id);
        
        if($chat) {
            $userId = auth()->user()->id;

            if($chat->owner_id === $userId || $chat->user_id === $userId) {

                $otroUsuario = $chat->user_id == $userId ? $chat->owner : $chat->usuario;

                $chat->unsetRelation('usuario');
                $chat->unsetRelation('owner');
                $chat->person = [
                    "nombre" => $otroUsuario->name,
                    "foto" => $otroUsuario->photo,
                    "id" => $otroUsuario->id,
                ];

                unset($chat->user_id);
                unset($chat->owner_id);

                $notificacion = DatabaseNotification::where('notifiable_id', $userId)
                    ->where('data->chat_id', $chat->id)
                    ->first();
                
                if ($notificacion) {
                    $notificacion->markAsRead();
                };

                return [
                    "chat" => $chat,
                ];
            } else {
                return null;
            }
        }

        return null;
    }

    public function destroy(Chat $chat)
    {
        $chat->delete();
        return [
            "mensaje" => "Mensaje eliminado",
        ];
    }
}
