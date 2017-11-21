<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    public function postNewPost(Request $request) {
        $post = Post::create([
            'title' => str_slug($request['title']),
            'descriptions' => $request['descriptions']
        ]);

        return response()->json($post);
    }

    public function getAllPost(Request $request) {
        $post = Post::orderBy('created_at', 'desc')->get();
        return response()->json($post);
    }

    public function getReadPost($title) {
        $post = Post::where('title', $title)->first();
        return response()->json($post);
    }

    public function getEditPost($title) {
        $post = Post::where('title', $title)->first();
        return response()->json($post);
    }
    
    public function postUpdatePost(Request $request, $title, $id) {
        $post = Post::find($id);
        $post->update([
            'title' => str_slug($request['title']),
            'descriptions' => $request['descriptions']
        ]);
        return response()->json($post);
    }

    public function getDeletePost($title, $id) {
        $post = Post::find($id)->delete();
        return response()->json($post);
    }
}
