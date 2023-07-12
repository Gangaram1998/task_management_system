    "use client";
    import React, { useState } from "react";

    interface InputObject {
        title:string;
        description:string;
    }

    export default function TodoInput() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(title==="" || description===""){
            alert("Please add title and description")
            return
        }
        let obj:InputObject = {
        title,
        description,
        };
        console.log(obj);
    };

    return (
        <div className="max-w-3xl w-full mx-auto ">
        <form action="" onSubmit={handleSubmit} className="flex flex-col md:flex-row w-full justify-around gap-1">
            <input
            type="text"
            placeholder="Title"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
            }}
            className="
                    py-2 
                    px-8
                    text-black
                    text-lg 
                    border
                    border-black
                    rounded-lg
                    "
            />
            <input
            type="text"
            placeholder="Description"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDescription(e.target.value);
            }}
            className="
                    py-2 
                    px-8
                    text-black 
                    text-lg border
                    border-black 
                    rounded-lg
                    "
            />
            <button
            type="submit"
            className="
                    bg-black 
                    px-8 
                    py-2
                    text-lg
                    rounded-lg
                    text-white
                    "
            >
            ADD
            </button>
        </form>
        </div>
    );
    }
