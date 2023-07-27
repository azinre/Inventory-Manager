<?php

namespace App\Http\Controllers;

use App\Models\item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Item::all();
        return response()->json($items, 200);
    }
    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $items = Item::find($id);
        return response()->json($items, 200);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $items = new Item;
        $items->name = request('name');
        $items->price = request('price');
        $items->save();

        return response()->json($items, 201);
    }



    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     //
    // }

    /**
     *  Update the specified resource in storage.
     */

    public function update($id)
    {
        $items = Item::find($id);
        $items->name = request('name');
        $items->price = request('price');
        $items->save();

        return response()->json($items, 200);
    }

    // /**
    //  *
    //  */
    // public function update(Request $request, item $item)
    // {
    //     //
    // }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $items = Item::find($id);
        $items->delete();

        return response()->json($items, 200);
    }
}
