<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAboutnewTable extends Migration
{
    public function up()
    {
        Schema::create('aboutnew', function (Blueprint $table) {
            $table->id();
            $table->string('hakkimda');
            $table->string('resim');
            $table->string('cv');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('aboutnew');
    }
}
