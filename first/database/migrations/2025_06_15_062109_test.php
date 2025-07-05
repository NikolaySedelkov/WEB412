<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('actor', function(Blueprint $table) {
            $table->id('actor_id')->unsigned()->autoIncrement();
            $table->string('first_name', 45);
            $table->string('last_name', 45);
            $table->timestamp('last_update');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actor');
    }
};
