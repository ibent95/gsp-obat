<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DrugController extends Controller {

    public function __construct() { }

    public function index() {
        $response = [
            'content' => 'drug/main',
        ];
        return view('index', $response);
    }

}
