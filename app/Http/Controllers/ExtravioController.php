<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Extravio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ExtravioController extends Controller
{
    public function index()
    {
        $reportes = Extravio::with('usuario')->get();
        return Inertia::render('Extravio/Index', [
            'reportes' => $reportes,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'foto_mascota' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'descripcion' => 'required|string',
        ]);

        // Manejo del archivo de imagen
        if ($request->hasFile('foto_mascota')) {
            $image = $request->file('foto_mascota');
            $imagePath = $image->store('mascotas', 'public'); // Guarda la imagen en storage/app/public/mascotas
        }

        $reporte = new Extravio([
            'user_id' => Auth::id(),
            'foto_mascota' => $imagePath ?? null,
            'descripcion' => $request->descripcion,
        ]);

        $reporte->save();

        return [
            "mensaje" => "Reporte publicado",
        ];
    }

    public function show($id)
    {
        $extravio = Extravio::find($id);
        
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'foto_mascota' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'descripcion' => 'required|string',
        ]);

        $reporte = Extravio::findOrFail($id);

        if($reporte->user_id != auth()->user()->id) {
            return null;
        }

        // Manejo del archivo de imagen
        if ($request->hasFile('foto_mascota')) {
            $image = $request->file('foto_mascota');
            $imagePath = $image->store('mascotas', 'public'); // Guarda la imagen en storage/app/public/mascotas
            $reporte->foto_mascota = $imagePath;
        }

        $reporte->update([
            'descripcion' => $request->descripcion,
        ]);

        $reporte->save();

        return [
            "mensaje" => "Información actualizada",
        ];
    }

    public function delete($id)
    {
        $extravio = Extravio::find($id);
        $extravio->delete();

        return [
            "mensaje" => "Reporte eliminado",
        ];
    }
}
