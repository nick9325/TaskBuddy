import React, { useState } from 'react'

export default function AddTask(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault(); //to prevet the page from reload
        if (!title || !desc) {
            alert("Title or Description cannot be blank")
        }
        else {
            props.addTask(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container my-3'>
            <h3>Create a new Task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Task Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Task</button>
            </form>
        </div>
    )
}
