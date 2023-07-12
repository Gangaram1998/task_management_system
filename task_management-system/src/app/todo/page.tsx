"use client"
import React, {useState} from 'react'
import TodoInput from '../../components/TodoInput'
import { TodoHeader}  from '../../components/TodoHeader'
import { TodoComp } from '../../components/TodoComp'
import { TodoEdit } from '@/components/TodoEdit'

export default function Todo(){
    const [show,setShow] = useState<boolean>(false)
    return(
        <div className='flex flex-col gap-10'>
            <TodoHeader/>
            <TodoInput/>
             <div className='flex flex-col gap-2'>
            <TodoComp show={setShow} />
            <TodoComp show={setShow} />
            <TodoComp show={setShow} />
            <TodoComp show={setShow} />
            </div>
            {show && <div className=' flex fixed top-0 bottom-0 left-0 right-0 justify-center items-center z-1'>
                <TodoEdit show={setShow} />
            </div> }
        </div>
    )
}
