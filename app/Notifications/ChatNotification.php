<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class ChatNotification extends Notification implements ShouldQueue
{
    use Queueable;

    private $data;

    /**
     * Create a new notification instance.
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        /*if($this == null) {
            if(isset($this->data['email']))
            {
                return ['database', 'mail', 'broadcast'];
            }
        }*/

        return ['database', 'broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     */
    /*public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                ->subject("Persona interesada en adoptar tu mascota")
                ->greeting("Hola, {$notifiable->name}")
                ->line('Una persona está interesada en adoptar tu mascota.')
                ->line('Revisa tu bandeja de mensajes para ponerte en contacto.')
                ->line('Gracias por usar nuestra aplicación!')
                ->salutation('Saludos, El Equipo de PetSafe')
                ->action('Visitar Sitio', url('/'));
        
    }*/

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }

    public function toDatabase($notifiable)
    {
        $existeNotificacion = DatabaseNotification::where('notifiable_id', $notifiable->id)
            ->where('data->chat_id', $this->data["chat_id"])
            ->exists();

        if($existeNotificacion)
        {
            return null;
        }

        return [
            'chat_id' => $this->data['chat_id'],
            'message_id' => $this->data['message_id'],
        ];
    }

    public function toBroadcast(object $notifiable): BroadcastMessage
    {
        return new BroadcastMessage([
            'chat_id' => $this->data['chat_id'],
            'message_id' => $this->data['message_id'],
            'user' => $this->data['user'],
        ]);
    }

}
