import React from 'react'

export default function RadioQuestion() {

    const [question,setQuestion]=React.useState({})
    const [answer1,setAnswer1]=React.useState({})
    const [answer2,setAnswer2]=React.useState({})
    const [answer3,setAnswer3]=React.useState({})
    const [answer4,setAnswer4]=React.useState({})

  return (
    <div>
         
    

        <div className="form-layout">
            <input onChange={e=>setQuestion(e.target.value)} type="text" className="form-question" placeholder="question "/>

        <form>
            <input onChange={e=>setAnswer1(e.target.value)} type="text" className="form-input" placeholder="option 1"/>
            <input onChange={e=>setAnswer2(e.target.value)} type="text" className="form-input" placeholder="option 2"/>
            <input onChange={e=>setAnswer3(e.target.value)} type="text" className="form-input" placeholder="option 3"/>
            <input onChange={e=>setAnswer4(e.target.value)} type="text" className="form-input" placeholder="option 4"/>

            <button className="form-button" onClick={questionSubmit}>submit</button>
        </form>
        </div>
    </div>
  )
}
