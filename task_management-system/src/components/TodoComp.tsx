import React from 'react'
interface TodoComponent {
  id?:number;
  title:string;
  description:string;
  status:string;
  show:React.Dispatch<React.SetStateAction<boolean>>;
}

export const TodoComp = ({show,id,status,title,description}:TodoComponent) => {

  const handleClick = () =>{
    show(true);
    console.log("clicked")
  }

  const handleDelete =()=>{
    console.log("deleted")
  }

  return (
    <div className='flex flex-col md:flex-row justify-around text-white bg-violet-600 lg:text-lg  items-center gap-1 px-2 py-2 rounded-3xl'>
        <div className='p-1 max-w-xs text-center flex items-center font-bold '>1</div>
        <div className='p-2 max-w-xs text-center font-bold '>complete project</div>
        <div className='p-2 max-w-sm text-center text-sm italic'>complete ajio projects in g days only</div>
        <div className='p-1 text-center flex items-center'>in Progress</div>
        <div className=' text-center flex justify-center items-center'>
            <button className='text-center bg-blue-600 px-4 max-h-10 py-1 rounded-lg'  onClick={handleClick}>Edit</button>
        </div>
        <div className=' text-center flex justify-center items-center'>
          <button className='text-center bg-red-600 px-3 max-h-10 py-1 rounded-lg' onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}
