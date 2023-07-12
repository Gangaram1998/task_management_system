    "use client";
import React, { useState } from "react";
interface TodoComp{
    show: React.Dispatch<React.SetStateAction<boolean>>

}

    export const TodoEdit = ({show}:TodoComp) => {
    const [status, setStatus] = useState<string>("");
    const [title,setTitle]=useState<string>("");
    const [description,setDescription]=useState<string>("");
    console.log(status,title,description);

    const handleClick =()=>{
        show(false)
    }


    return (
        <div className="max-w-xs max-h-80 p-8 flex flex-col gap-3 bg-purple-700 rounded-lg text-white">
        <input
            type="text"
            placeholder="Title"
            className="border border-none px-2 py-2 w-full rounded-lg text-black"
            value={title}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)}
        />
        <textarea
            placeholder="Description"
            className="border border-none py-2 px-2 w-full rounded-lg text-black"
            value={description}
            onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{setDescription(e.target.value)}}
        />
        <div className="text-white-600 flex gap-1">
            <label className="text-white">
            <input
                type="radio"
                value={"todo"}
                checked={status === "todo"}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setStatus(e.target.value)}}
            />
            Todo
            </label>
            <label className="text-white">
            <input type="radio" checked={status === "in progress"} value={"in progress"} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setStatus(e.target.value)}} />
            In Progress
            </label>
            <label className="text-white">
            <input type="radio" value={"completed"} checked={status === "completed"} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setStatus(e.target.value)}} />
            Completed
            </label>
        </div>
        <button className="text-center bg-blue-600 px-4 max-h-10 py-1 rounded-lg text-white">
            Save
        </button>
        <button className="bg-red-500  rounded-3xl py-1" onClick={handleClick}>Cancel</button>
        </div>
    );
    };
