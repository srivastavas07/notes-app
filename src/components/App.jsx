import React from "react";
import Header from "./Header";
import Notes from './notes';
import { useState, useEffect } from "react";
import "../index.css";
function App() {
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        const json = localStorage.getItem('todos');
        const loadedTodos = JSON.parse(json);
        if (loadedTodos){
            setTodos(loadedTodos);
        }
    },[]);
    useEffect(()=>{
        if(todos.length > 0){
            const json = JSON.stringify(todos);
            localStorage.setItem('todos',json);
        }
    },[todos])
    // LocalStorage stays the same even after reloading..

    function handleSubmit(e) {
        e.preventDefault(); // prevents the page from refreshing
        let todo = document.getElementById("todoAdd").value;
        let titleVal = document.getElementById('todoTitle').value;
        const newTodo = {
            id: new Date().getTime(),
            title: titleVal,
            text: todo.trim(), // trim will basically remove all the unecessary spaces within the string..
            completed: false,
            important: false,
        }
        if (newTodo.text.length > 0) {
            setTodos([...todos].concat(newTodo));
            // ([...todos]): This part uses the spread operator (...) to create a shallow copy of the existing todos array. This is done to avoid directly modifying the original array.
        } else {
            alert("Enter a Valid Task illiterate!");
        }
        //Now we Also have to empty the input element 
        document.getElementById('todoAdd').value = "";
        document.getElementById('todoTitle').value = "";

    }


    return <div className="App">
        <Header />
        <div className="MainContainer min-h-screen py-14 px-5">
            <div className="inputContainer p-4 lg:w-[40%] md:w-[60%] sm:w-[90%] mx-auto mb-10 hover:bg-slate-700 border-style">
                <form onSubmit={handleSubmit} className="flex-col">
                    <input type="text" id="todoTitle" className="input w-[100%] mb-6 flex-1 outline-none placeholder:text-base placeholder:font-bold" placeholder="Title" />
                    <textarea type="text" id='todoAdd' className="textInput w-[100%] outline-none placeholder:text-sm " placeholder="Take a note.." />
                    <button type="submit" className="mt-4 text-sm addButton px-4 py-2 ">Add + </button>
                </form>
            </div>
            <div className="notesContainer relative max-w-[100%] flex justify-center flex-wrap">

                {/* DUMMY DATA  */}
                {/* <Notes title= 'hello demo' content = 'content demo munna..!content demo munna..!content demo munna..!content demo munna..!' keyy="hello"/>
                <Notes title= 'hello demo' content = 'content demo munna..!content demo munna..!content demo munna..!' keyy="hello1"/>
                <Notes title= 'hello demo' content = 'content demo munna..!content demo munna..!content demo munna..!' keyy="hello2"/>
                <Notes title= 'hello demo' content = 'content demo munna..!content demo munna..!' keyy="hello3"/>
                <Notes title= 'hello demo' content = 'content demo munna..!content demo munna..!' keyy="hello4"/>
                <Notes title= 'hello demo' content = 'content demo munna..!' keyy="hello5"/>
                <Notes title= 'h' content = 'c' keyy="hello5"/> */}


               


                {
                    todos.map((todo) => {
                        return <><Notes title={todo.title} content={todo.text} completed = {todo.completed} importy = {todo.important} keyy={todo.id} setTodos={setTodos} todos = {todos}/>
                        </>
                    })

                }
            </div>
        </div>

    </div>
}

export default App;