<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aboutnew extends Model
{
    use HasFactory;

    protected $table = 'aboutnew';

    protected $fillable = [
        'hakkimda',
        'resim',
        'cv',
    ];

    // varsayılan olarak timestamps eklemek için gerekli değil
    public $timestamps = true;
}
