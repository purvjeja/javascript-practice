import React, { useEffect, useState } from 'react';
import './App.css';
interface ListBox {
  listData: { id: string | number | undefined; listContent: string; isChecked: boolean; isRemoved : boolean; };
}

interface ListArrayObject {
  id: number;
  listContent: string;
  isChecked: boolean;
  isRemoved : boolean;
}

function ToDoLists() {
  let [list, setList] = useState<Array<ListArrayObject>>([]);
  let [activeFilter, setActiveFilter] = useState<string>("all");
  let [filteredArray,setFilterArray] = useState<Array<ListArrayObject>>([]);
    
  const addList = () => {
    let inputed : string = (document.getElementById("input") as HTMLInputElement).value;
    if(inputed === "") return;
    (document.getElementById("input") as HTMLInputElement).value = "";
    const defaultObject: ListArrayObject = {
      id: list.length + 1,
      listContent: inputed,
      isChecked: false,
      isRemoved :false
    }
    setList(list => [defaultObject,...list]);
  }

  // useEffect(() => {
  //  const currentActive = ((document.getElementById(activeFilter)) as HTMLInputElement);
  //  currentActive.style.backgroundColor = "transparent";
  //  currentActive.style.borderWidth = "2px";
  //  currentActive.style.borderColor ="wheat";
  //  currentActive.setAttribute("style","backgroundColor : transparent; border:2px solid black;");
  // });

  useEffect(() => {
    let localStorageData : string = JSON.stringify(list);
    localStorage.setItem("toDo",localStorageData);
  });

  useEffect(() => {
    let tempArray : Array<ListArrayObject> = [];
    if(activeFilter === "all") tempArray = list.map((listElement) => listElement);
    else tempArray = list.filter((listElement) => listElement.isChecked === (activeFilter === "completed") ? true : false);     
    setFilterArray(tempArray);  
  },[activeFilter,list]);

  const CreateListBox = (props: ListBox) => {
    const { id, listContent, isChecked,isRemoved } = props.listData;
    const setId: string = `${id}`;
    if(!isRemoved) return (
      <div className="listBox">
       <div className="LBInput"> <input type="checkbox" onClick={() => changeCheckedState(setId)} id={setId} defaultChecked={isChecked}></input> </div>
       <div className="LBHeading"> <h3> {listContent} </h3> </div>
       <div className="LBButton"><button onClick={() => removeList(setId)}> <b>X</b> </button> </div>
      </div>
    ) 
    return (
      <>
      </>
    )
  }

  const changeCheckedState = (ofId : string) => {
    let tempArray : Array<ListArrayObject> = list;
    for(let element of tempArray)
      if(element.id === parseInt(ofId)) 
        element.isChecked = !element.isChecked;
    setList([...tempArray]);  
  }

  const removeList = (ofId : string) => {
    // let tempArray : Array<ListArrayObject> = list;
    for(let element of list)
      if(element.id === parseInt(ofId)) 
        element.isRemoved = !element.isRemoved;
    setList([...list]);  
  }

  const changeActivefilter = (id: string) => { 
    setActiveFilter(id);
  }

  return (
    <div className="ToDoList">
      <h1> To Do List</h1>
      <div className="inputAreaSection">
        <input type="text" placeholder="What's your plan today?" id="input"></input>
        <button onClick={addList}> + </button>
      </div>
      <div className="listAreaSection">
        {filteredArray.map((listElement, index) => <div key={index}> <CreateListBox listData={listElement} /> </div>)}
      </div>
      <div className="filterButtonsSection">  
        <div>
          <button id = "all" onClick={() => changeActivefilter("all")}> All </button>
          <button id = "completed" onClick={() => changeActivefilter("completed")}> Completed </button>
          <button id = "active" onClick={() => changeActivefilter("active")}> Active </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoLists;