import React, { useState } from 'react';
import './todo.css';

export default function Todo(){
    let [todoArrayObject,setTodoArrayObject] = useState([]);
    let [listCount,setListCount] = useState(0);

    const InputFields = () => {
        return (
            <div>
                <input id="currentInput" type="text" placeholder="Add Your Goals" />
                <button id="addButton" onClick={AddCurrentGoal}> Add </button> 
            </div>
        )
    }

    const ListArea = () => {
        const listItems = todoArrayObject.map((todoArrayItem,index) => <div key={index}> <CreateComponent  id={todoArrayItem.id} content={todoArrayItem.content} status={todoArrayItem.status}/></div>);
        return (
            <div id="listArea"> 
                {listItems}
            </div>
        )
    }

    const AddCurrentGoal = () => {
        const currentGoal = document.getElementById('currentInput').value;
        setTodoArrayObject([...todoArrayObject,{id : listCount , content : currentGoal , status : false}]);
        console.log(todoArrayObject);
        setListCount(listCount+1);
    }

    const CreateComponent = (props) => {
        return (
            <div id={props.id} className="listBody">
                <div className="listComponentCheckBox"><input type="checkbox" /></div>
                <div className="listComponentName"><h4>{props.content}</h4></div>
                <div className="listComponentCrossButton"><button><b>X</b></button></div>
            </div>
        )
    }

    return (
        <div id="body">
            <h1> To-Do List </h1>
            <InputFields />
            <ListArea />
            <FilterButtons />
        </div>    
    )
}
const FilterButtons = () => {
    return (
        <div>
            <button>Active</button>
            <button>Completed</button>
            <button>All</button>
        </div>
    )       
}
 