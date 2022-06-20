<?php

namespace App\Http\Controllers;

use App\Models\MultipleChoiceQuestion;
use Illuminate\Http\Request;

class MultipleChoiceQuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addQuestionMultipleChoice(Request $request)
    {
        $question=New MultipleChoiceQuestion();
        $question->question=$request->question;
        $question->answer1=$request->answer1;
        $question->answer2=$request->answer2;
        $question->answer3=$request->answer3;
        $question->answer4=$request->answer4;
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
     * @param  \App\Models\MultipleChoiceQuestion  $multipleChoiceQuestion
     * @return \Illuminate\Http\Response
     */
    public function show(MultipleChoiceQuestion $multipleChoiceQuestion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MultipleChoiceQuestion  $multipleChoiceQuestion
     * @return \Illuminate\Http\Response
     */
    public function edit(MultipleChoiceQuestion $multipleChoiceQuestion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MultipleChoiceQuestion  $multipleChoiceQuestion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MultipleChoiceQuestion $multipleChoiceQuestion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MultipleChoiceQuestion  $multipleChoiceQuestion
     * @return \Illuminate\Http\Response
     */
    public function destroy(MultipleChoiceQuestion $multipleChoiceQuestion)
    {
        //
    }
}
