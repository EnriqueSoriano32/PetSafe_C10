<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Extravio extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'foto_mascota',
        'descripcion',
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
