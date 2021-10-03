<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DrugController extends Controller {

    public function __construct() { }

    public function index() {
        $response = [
            'title' => 'Obat',
            'data' => [],
            'content' => 'drug/main',
        ];
        return view('index', $response);
    }

    public function form() {
        $response = [
            'title' => 'Obat',
            'content' => 'drug/form',
        ];
        return view('index', $response);
    }

    public function insert() {
        $response = [
            'title' => 'Obat',
            'content' => 'drug/main',
        ];
        return view('index', $response);
    }

    public function remove() {
        $response = [
            'title' => 'Obat',
            'content' => 'drug/main',
        ];
        return view('index', $response);
    }

}
