import React from 'react';
import '../App.css';
import NavBarAdmin from './NavBarAdmin';


export default function Main() {

  const questions =["quest1","quest2","quest3","quest4"]
  const answers = ["answer","answer1","answer2","answer3","answer4","answer5","answer6","answer7","answer8","answer9","answer10","answer11","answer12"]

  // so i need the async function to retrieve data using get 
  // and i need the code that will spread the data i have onto the div and unordered list/ 
  async function getQuestions(){
    const url =("wahtever the url is since my laravel is acting up and i cant test")
    // i have one table with the questions and another with the answers so lets assume 2 arrays 
  }
  return (
    <div className="main-body" id="main-">
    <h1>start answering sucker</h1>
    {/* here is where i post teh wuestions  */}
    {/* im assuming ill need for the radio questions some data that comes from the db  */}
    
    </div>
  )
}
