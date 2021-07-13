<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Videos;


class VideosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $videos = Videos::all();
        return \response($videos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $request->validate([
        'title' => 'required | max:100',
        'description' => 'required',
        'miniatura' => 'required',
        'user_image' => 'required',
        'duration' => 'required',
        'datetime' => 'required',
        'status' => 'required',
      ]);

        $videos = Videos::create($request->all());

        return \response($videos);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $video = Videos::findOrFail($id);

        return \response($video);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $video = Videos::findOrFail($id);

      $video->title = $request->get('title');
      $video->description = $request->get('description');
      $video->miniatura = $request->get('miniatura');
      $video->user_image = $request->get('user_image');
      $video->duration = $request->get('duration');
      $video->datetime = $request->get('datetime');
      $video->status = $request->get('status');

      $video->save();

      return \response($video);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Videos::destroy($id);
        return \response( ['content' => "El video con id ${id} ha sido eliminado" ]);

    }
}
