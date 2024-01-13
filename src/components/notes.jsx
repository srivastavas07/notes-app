import React, { useState } from "react";
import { UilTrashAlt, UilStar, UilPen } from '@iconscout/react-unicons'
function Notes({ title, content, completed,importy, keyy, setTodos, todos }) {
    const [edit, setEdit] = useState(false);
    console.log(todos);
    let style;
    let iconSize = 28;
    // let hexcolor = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
    // console.log(hexcolor);
    // const bgcolor={ 
    //     backgroundColor : hexcolor,
    // }
    // this code is to generate a random color


    const important =(id)=>{
        let updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.important = !todo.important;
            }
            return todo;
        })
        setTodos(updatedTodos);

    }
    const delTodo = (key) => {
        let updatedTodos = [...todos].filter(todo => todo.id !== key);
        setTodos(updatedTodos)

    }
    const toggleCheck = (id) => {
        let updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    const editNotes = (id) => {
        let editedHeading = document.getElementById(keyy+"h").value;
        let editedText = document.getElementById(keyy+"a").value;
        console.log("editedText"+editedText);
        let updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.text = editedText;
                todo.title = editedHeading;
            }
            return todo;
        })
        setTodos(updatedTodos);
        setEdit(false);
    }
 
    if (completed === true && importy === true) {
        style = {
            borderBottom: '2px solid #39FF14',
            backgroundColor : 'black',
        }
 
    }else if(completed === true && importy === false ){
        style = {
            borderBottom: '2px solid #39FF14',
        }
    }else if (completed === false && importy === true){
        style ={
            backgroundColor :'black',
        }
    }

    return <div className={`notes-container {} relative lg:w-[22%] md:w-[30%] w-[90%] border-style hover:bg-slate-700`} title= {completed ? "Completed" : "Incomplete"}   style={style} id={keyy}>
        <div className=" flex notes-heading text-base pb-3">

            {edit ? (<input defaultValue={title} className="flex-1 text-base" id={keyy+"h"} />) : (<h1 style={{ overflowWrap: 'break-word' }}>{title}</h1>)}
            {/* <span className="colYellow font-extrabold">---</span> */}
        </div>
        <div className="notes-content">

            {edit ? (<textarea defaultValue={content} className="p-0 editPara h-[50px] text-xs w-full outline-none border-none" id={keyy+"a"} />) : (<p className=" text-xs">{content}</p>)}

            {/* {completed ? (<p>true</p>):(<p>false</p>)} */}
        </div>
        <div className="options w-[100px] flex justify-between items-center">
            <button title = "Mark Important" className="optionButton" onClick={()=>(important(keyy))}><UilStar className={`icon ${importy?("bg-white text-black hover:bg-black hover:text-white"):("")}`} size={iconSize} /></button>

            {edit ? (<button title = "Submit Edit" onClick={() => { editNotes(keyy) }}><UilPen className="icon bg-black" size={iconSize}/></button>) : (<button title = "Edit Note"  onClick={() => { setEdit(true) }} className="optionButton"><UilPen className="icon" size={iconSize} /></button>
            )}
            <button title = "Delete" className="delButton optionButtons" onClick={() => delTodo(keyy)}><UilTrashAlt className="icon" size={iconSize} /></button>
            <div className="icon flex items-center justify-center"><input title = {completed ? "Completed" : "Incomplete" } size={iconSize} type="checkbox" onChange={() => { toggleCheck(keyy) }} id="completed" checked={completed} /></div>

        </div>
    </div>
}
export default Notes;

