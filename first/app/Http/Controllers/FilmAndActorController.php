<?php

namespace App\Http\Controllers;

use App\Models\Actor;
use Illuminate\Http\Request;

class FilmAndActorController extends Controller
{
    public function createActorView() {
        return view('pages.actor.create-actor');
    }

    public function updateActorView($id) {
        $actor = Actor::where('actor_id','=', $id)->get();

        if(isset($actor)) {
            return view('pages.actor.update-actor', ['actor' => $actor[0]]);
        }
        
    }

    public function createActor(Request $request, $id) {
        $actor = Actor::update([
            'actor_id' => $id,
            'first_name' => $request->json('first-name'),
            'last_name' => $request->json('last-name')
        ]);

        return redirect('/actors');
    }

    public function updateActor() {

    }

    public function view() {
        return view('pages/actor/index');
    }
}
