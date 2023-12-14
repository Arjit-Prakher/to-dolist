
"use client"
import React, { useState } from 'react'
// import background from './images/background.jpg'
const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    setTitle("")
    setDesc("")
  }
  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)

  }

  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <div className="tasks" key={i}>
          <div className="task">

            <h3>{t.title}</h3>
            <h5>{t.desc}</h5>
          </div>
          <button onClick={() => { deleteHandler(i) }}>Remove</button>
        </div>
      )
    })
  }
  return (
    <div className='wall'>
      <div className="nav">
        <h1>Ultraviolet Writes</h1>
      </div>
      <div className="main">

        <form onSubmit={submitHandler}>

          <div className="write">
            <div className="writefirst">

              <div className="title">
                <input type="text" placeholder='Title here: ' value={title} onChange={(e) => { setTitle(e.target.value) }} />
              </div>
              <div className="des">
                <input type="text" placeholder='Description here: ' value={desc} onChange={(e) => { setDesc(e.target.value) }} />
              </div>

            </div>
            <button>Save</button>
          </div>
        </form>

        <div className="disp">
          {renderTask}
        </div>
      </div>

    </div>
  )
}

export default page
