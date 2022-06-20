import React,{useState} from 'react'
import RadioQuestion from './RadioQuestion'

export default function StartQuestionaire(){



    const [selectQuestionType,setQuestionType]= useState()
    const value=""

    const getQuestionValue = ()=>{
        console.log(selectQuestionType)


    }
  return (
    <div>
        <div>
            <label for="type-question">select a type of question:</label>
            <select name="type-question" id="question-id"
            value={value} onChange={(e)=>setQuestionType(e.target.value)}>
            
            <option value="radio">multiple-choice</option>
            <option value="free-answer">free answer</option>
            <option value="range-strongest">sort from highest</option>
            </select>

            <button className="button" onClick={getQuestionValue}>choose</button>



          <RadioQuestion/>
        </div>
    </div>
  )
}


