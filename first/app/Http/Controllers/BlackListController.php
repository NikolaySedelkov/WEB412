<?php

namespace App\Http\Controllers;

use App\Models\BlackList;
use Illuminate\Http\Request;

class BlackListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(BlackList $blackList)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BlackList $blackList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BlackList $blackList)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BlackList $blackList)
    {
        //
    }

    public function listView() {
        return view('pages.black-list.read');
    }
}
