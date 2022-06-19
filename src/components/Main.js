import React from 'react';
import '../App.css';
import NavBarAdmin from './NavBarAdmin';


export default function Main() {

  //{ below i assumed tyhe wrong table structure which means i have tyo change my laravel tables. 

  // const questions =["quest1","quest2","quest3","quest4"]
  // const answers = {"quest1":"answer1","quest1":"answer2","quest1":"answer3","answer4","answer5","answer6","answer7","answer8","answer9","answer10","answer11","answer12"}}

  // assuming i have a table with question and answers as a single oobject 
  const questions = {
    
   "question":{
          "answer1":'answer1',
          "answer2":'answer2',
          "answer3":'answer3',
          "answer4":'answer4',
        }}
         
  
  function getData(url){
    questions.keys().forEach(element => {
      console.log(element)
    });
  }
  // so i need the async function to retrieve data using get 
  // and i need the code that will spread the data i have onto the div and unordered list/ 
  // async function getQuestions(){
    // const url =("wahtever the url is since my laravel is acting up and i cant test")
    // i have one table with the questions and another with the answers so lets assume 2 arrays 


    // / the function that will get the informations and create teh object using using it  
  // }
  return (
    <div className="main-body" id="main-">
    <h1>start answering sucker</h1>
    <div>{getData()}</div>
    {/* here is where i post teh wuestions  */}
    {/* im assuming ill need for the radio questions some data that comes from the db  */}
    
    </div>
  )
}
