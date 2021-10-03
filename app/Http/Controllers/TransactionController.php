<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TransactionController extends Controller {

    public function __construct() { }

    public function index() {
        $response = [
            'content' => 'transaction/main',
        ];
        return view('index', $response);
    }

    public function form() {
        $response = [
            'content' => 'transaction/form',
        ];
        return view('index', $response);
    }

    public function insert() {
        $response = [
            'content' => 'transaction/main',
        ];
        return view('index', $response);
    }

    public function remove() {
        $response = [
            'content' => 'transaction/main',
        ];
        return view('index', $response);
    }

}
