import React from 'react';

export default function Questions() {
  return (
    <main>
        <form className="form-layout">
            <input type="text" className="form-question" placeholder="question "/>
            <input type="text" className="form-input" placeholder="option 1"/>
            <input type="text" className="form-input" placeholder="option 2"/>
            <input type="text" className="form-input" placeholder="option 3"/>
            <input type="text" className="form-input" placeholder="option 4"/>

            <button className="form-button">submit</button>
            
        </form>
        
    </main>
  )
}
