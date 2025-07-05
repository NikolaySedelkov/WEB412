<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EntityModel extends Model
{
    use HasFactory;

    protected $table = 'test_entity';
    public $timestamps = false;
}
