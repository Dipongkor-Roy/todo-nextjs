"use client"; // To inform next js, this is a client component
import { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandle = (event) => {
    event.preventDefault();
    setMainTask([...mainTask, { title, desc }]); //object in array.stored data like an object
    setTitle("");
    setDesc("");
  };
  const deleteHandler=(i)=>{
    const copyArr=[...mainTask];
    copyArr.splice(i,1);//i=whice one and 1 for deleteCount
    setMainTask(copyArr);
  }

  let renderTask = "No Task Available";
  if (mainTask.length > 0) {
    // condition for no task
    renderTask = mainTask.map((t, i) => {
      return (
        //key give unique identity to every task
        <li key={i} className="flex items-center justify-between mb-5"> 
          <div className="flex justify-between mb-2 w-2/3">
            <h2 className="text-2xl font-semibold">{t.title}</h2>
            <h2 className="text-xl font-semibold">{t.desc}</h2>
          </div>
          <button onClick={()=>deleteHandler(i)} className="bg-orange-200 rounded-xl px-3 py-2 ">Delete</button>
        </li>
      );
    });
  }
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
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          className="text-2xl border-zinc-800 border-2 m-8 p-x-4 py-2 "
          placeholder=" Description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
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
