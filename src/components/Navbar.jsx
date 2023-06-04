import React, { useEffect, useState } from 'react'
import {BsLightbulb, BsBasketFill, BsLightbulbFill} from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/actions/search';

const Navbar = () => {
    const [color, setColor] = useState(false)
    const dispatch = useDispatch();
    const {cardItems} = useSelector(state => state.card);
    const [search, setSearch] = useState('')


    useEffect(() =>{
        const root = document.getElementById('root');
        if(color){
            root.style.backgroundColor = "black";
            root.style.color = "gray";
        }else{
            root.style.backgroundColor = "white";
            root.style.color = "black";
        }
    }, [color])

    const searchPost = (e) => {
        if(e.key === 'Enter'){
            dispatch(searchAction(search))
        }
    }
  return (
    <div className='flex items-center justify-between px-3 mb-5 h-[150px]'>
        <img className='h-24' src="https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="" />
        <div className='text-3xl font-bold tracking-wider p-2 rounded-lg bg-indigo-600'>E-Commerce</div>
        <div className='flex items-center space-x-4'>
            <input value={search} onKeyPress={searchPost} onChange={e => setSearch(e.target.value)} className='border p-3 outline-none rounded-lg' type="text" placeholder='search' />
            <div onClick={() => setColor(!color)}>
                {
                    color ? <BsLightbulbFill size={25} className='cursor-pointer'/> : <BsLightbulb size={25} className='cursor-pointer'/>
                }
            </div>
            <div onClick={()=>dispatch({type:'DRAWER', payload:true})} className='relative'>
                <BsBasketFill size={25} className='cursor-pointer'/>
                <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'>{cardItems?.length}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar