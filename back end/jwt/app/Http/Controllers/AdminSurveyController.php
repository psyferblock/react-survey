<?php

namespace App\Http\Controllers;

use App\Models\AdminSurvey;
use Illuminate\Http\Request;

class AdminSurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addSurvey(Request $request)
    {
        $survey=New AdminSurvey();
        $survey->name=$request->name;
        $survey->save();
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
     * @param  \App\Models\AdminSurvey  $adminSurvey
     * @return \Illuminate\Http\Response
     */
    public function show(AdminSurvey $adminSurvey)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AdminSurvey  $adminSurvey
     * @return \Illuminate\Http\Response
     */
    public function edit(AdminSurvey $adminSurvey)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AdminSurvey  $adminSurvey
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AdminSurvey $adminSurvey)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AdminSurvey  $adminSurvey
     * @return \Illuminate\Http\Response
     */
    public function destroy(AdminSurvey $adminSurvey)
    {
        //
    }
}
