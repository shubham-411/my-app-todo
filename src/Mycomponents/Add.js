import React, { useState } from 'react'

export const Add = (props) => {
    const [title, settitle] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!title){
            alert("title cannot be blank");
        }
        props.addtodo(title);

        }
  return (
    <div className='container my-3'>
          <form onSubmit={submit}>
              <div className="mb-3">
                  <label htmlFor="title" className="form-label">To do Title</label>
                  <input type="text" className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}}id="title" aria-describedby="emailHelp"/>
                     
              </div>
              <button type="submit" className="btn btn-sm btn-success">Submit</button>
          </form>
    </div>
  )
}

