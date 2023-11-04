"use client"; // To inform next js, this is a client component 
import { useState } from "react";

const page = () => {
  const[title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const [mainTask,setMainTask]=useState([])
  const submitHandle=(event)=>{
    event.preventDefault();
    setMainTask([...mainTask,{title,desc}])//object in array.stored data like an object  
    setTitle('');
    setDesc('');
  }
  let renderTask='No Task Available'
  return (
    <>
      <h2 className="bg-black text-white text-3xl text-center">Todo List</h2>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name=""
          id=""
          className="text-2xl border-zinc-800 border-2 m-8 p-x-4 py-2 "
          placeholder=" Input Task Name"
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <input
          type="text"
          name=""
          id=""
          className="text-2xl border-zinc-800 border-2 m-8 p-x-4 py-2 "
          placeholder=" Description"
          value={desc}
          onChange={(e)=>{
            setDesc(e.target.value)
          }}
        />
        <button className="bg-black px-3 py-2 text-white rounded-md font-mono items-center">
          Add Task
        </button>
      </form>
      <hr />
      <div className="bg-slate-200 p-8 ">
        <h2>{renderTask}</h2>
      </div>
    </>
  );
};

export default page;
 