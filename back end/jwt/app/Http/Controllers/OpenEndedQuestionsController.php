<?php

namespace App\Http\Controllers;

use App\Models\OpenEndedQuestions;
use Illuminate\Http\Request;

class OpenEndedQuestionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getQuestion(Request $request)
    {
        $question=New OpenEndedQuestions();
        $question->question=$request->question;
        $question->save();
        
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
     * @param  \App\Models\OpenEndedQuestions  $openEndedQuestions
     * @return \Illuminate\Http\Response
     */
    public function show(OpenEndedQuestions $openEndedQuestions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OpenEndedQuestions  $openEndedQuestions
     * @return \Illuminate\Http\Response
     */
    public function edit(OpenEndedQuestions $openEndedQuestions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OpenEndedQuestions  $openEndedQuestions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OpenEndedQuestions $openEndedQuestions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OpenEndedQuestions  $openEndedQuestions
     * @return \Illuminate\Http\Response
     */
    public function destroy(OpenEndedQuestions $openEndedQuestions)
    {
        //
    }
}
