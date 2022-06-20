import React,{useState} from 'react'

export default function RadioQuestion() {

    const [question,setQuestion]=useState({})
    const [answer1,setAnswer1]=useState({})
    const [answer2,setAnswer2]=useState({})
    const [answer3,setAnswer3]=useState({})
    const [answer4,setAnswer4]=useState({})
    
     const getData=async()=>{
        console.log(answer1,answer2,answer3,answer4)
        const url="http://127.0.0.1:8000/api/add_question_radio";
        const res= await fetch("http://127.0.0.1:8000/api/add_question_radio",{
            method:'POST',
            body:JSON.stringify({"question":question,"answer1":answer1,"answer2":answer2,"answer3":answer3,"answer4":answer4 }),
            headers:{
                "contret-type":"application/json",}
        }) 
            const data =await res.json()
            console.log(data)

        }
    

  return (
    <div>
         
    

        <div className="form-layout">
            <input onChange={e=>setQuestion(e.target.value)} type="text" className="form-question" placeholder="question "/>

            
                <input onChange={e=>setAnswer1(e.target.value)} type="text" className="form-input" placeholder="option 1"/>
                <input onChange={e=>setAnswer2(e.target.value)} type="text" className="form-input" placeholder="option 2"/>
                <input onChange={e=>setAnswer3(e.target.value)} type="text" className="form-input" placeholder="option 3"/>
                <input onChange={e=>setAnswer4(e.target.value)} type="text" className="form-input" placeholder="option 4"/>

                <button className="form-button" onClick={getData}>submit</button>
            
        </div>
    </div>
  )
}
