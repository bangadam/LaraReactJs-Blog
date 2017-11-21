<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'LoginController@postLogin');

Route::post('/create-new-post', 'PostController@postNewPost');

Route::get('/get-all-post', 'PostController@getAllPost');

Route::get('/{title}/read', 'PostController@getReadPost');
Route::get('/{title}/edit', 'PostController@getEditPost');
Route::post('/{title}/{id}/update', 'PostController@postUpdatePost');
Route::get('/{title}/{id}/delete', 'PostController@getDeletePost');
