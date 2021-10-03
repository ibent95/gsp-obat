<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TransactionController extends Controller {

    public function __construct() { }

    public function index() {
        $response = [
            'title' => 'Transaksi',
            'data' => [],
            'content' => 'transaction/main',
        ];
        return view('index', $response);
    }

    public function form() {
        $response = [
            'title' => 'Transaksi',
            'content' => 'transaction/form',
        ];
        return view('index', $response);
    }

    public function insert() {
        $response = [
            'title' => 'Transaksi',
            'content' => 'transaction/main',
        ];
        return view('index', $response);
    }

    public function remove() {
        $response = [
            'title' => 'Transaksi',
            'content' => 'transaction/main',
        ];
        return view('index', $response);
    }

}
