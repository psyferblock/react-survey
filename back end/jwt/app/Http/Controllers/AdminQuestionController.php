<?php

namespace App\Http\Controllers;

use App\Models\AdminQuestion;
use Illuminate\Http\Request;

class AdminQuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addQuestionRadio(Request $request)
    {
        $question=New AdminQuestion();
        $question->question=$request->question;
        $question->answer1=$request->answer1;
        $question->answer2=$request->answer2;
        $question->answer3=$request->answer3;
        $question->answer4=$request->answer4;
        $question->save();

        return response()->json([
            "status"=>"success"
        ],200);

        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AdminQuestion  $adminQuestion
     * @return \Illuminate\Http\Response
     */
    public function show(AdminQuestion $adminQuestion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AdminQuestion  $adminQuestion
     * @return \Illuminate\Http\Response
     */
    public function edit(AdminQuestion $adminQuestion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AdminQuestion  $adminQuestion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AdminQuestion $adminQuestion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AdminQuestion  $adminQuestion
     * @return \Illuminate\Http\Response
     */
    public function destroy(AdminQuestion $adminQuestion)
    {
        //
    }
}
