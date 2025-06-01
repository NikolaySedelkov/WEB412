<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NavigateController extends Controller {
    private $token = '!!!!';

    public function toAbout() {
        return view('pages.about');
    }

    public function toContact() {
        return view('pages.contact');
    }

    public function toKorzina() {
        return view('pages.korzina');
    }

    public function toHome(Request $request) {
        return view(
            'welcome', 
            [
                "message" => $request->get('name', 'UNKNOWN_USER').', Hello world!',
                "role" => "guest",
                "db" => [
                    "user" => "root",
                    "url" => "localhost",
                    "port" => 5555
                ],
                "array" => []
            ]
        );
    }
}