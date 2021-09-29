import React, { useEffect, useState } from 'react';
import InputSection from "./InputSection";
import './App.css';
import { ListArrayObject } from "./Interfaces"
import { ListBox} from "./Interfaces";

function ToDoLists() {
  let fetchToDoList = (localStorage.getItem("toDO") === null) ? [] : JSON.parse(localStorage.getItem("toDo") as string) as Array<ListArrayObject>;
  let [list, setList] = useState<Array<ListArrayObject>>(fetchToDoList);
  let [activeFilter, setActiveFilter] = useState<string>("all");
  let [filteredArray,setFilterArray] = useState<Array<ListArrayObject>>([]);

  if(localStorage.getItem("userNameToDo") === null) localStorage.setItem("userNameToDo", prompt("Enter your name?","Purv") as string);

  useEffect(() => {
    let localStorageData : string = JSON.stringify(list);
    localStorage.setItem("toDo",localStorageData);
  });

  useEffect(() => {
    let tempArray : Array<ListArrayObject> = [];
    if(activeFilter === "all") tempArray = list.map((listElement) => listElement);
    else tempArray = list.filter((listElement) => listElement.isChecked === (activeFilter === "completed") ? true : false);     
    setFilterArray(tempArray.reverse()); 
  },[activeFilter,list]);


  const clearData = () => { if(window.confirm("Are you sure you want to delete the data?")) setList([]) }
  
  const changeActivefilter = (id: string) => { setActiveFilter(id) }

  return (
    <div className="ToDoList">
      <h1> Hey {localStorage.getItem("userNameToDo")}, </h1>
     <InputSection currentActiveFilter={() => setActiveFilter('all')}  list={list} setList={(newArray : Array<ListArrayObject>) => setList(newArray)}/>
     
     <div className="listAreaSection">
          {filteredArray.map((listElement, index) => <div key={index}> <CreateListBox setList={setList} listData={listElement} list={list} /> </div>)}
       </div>  

      <div className="filterButtonsSection">  
        <div>
          <button id="all" style={setActiveAppearance("all",activeFilter)} onClick={() => changeActivefilter("all")}> All </button>
          <button id="completed" style={setActiveAppearance("completed",activeFilter)} onClick={() => changeActivefilter("completed")}> Completed </button>
          <button id="active" style={setActiveAppearance("active",activeFilter)} onClick={() => changeActivefilter("active")}> Active </button>
        </div>
      </div>
      <button className="clearDatabutton" onClick={clearData}>Clear Date</button>
    </div>
  );
}

function setActiveAppearance(calledFrom : string ,currentActiveFilter : string) : object{
  if(calledFrom === currentActiveFilter) return {};
  return { backgroundColor : 'rgba(0, 0, 0,0.6)', color : 'wheat', border : '2px solid wheat'};
}

const CreateListBox = (props: ListBox) => {
  const { id, listContent, isChecked,isRemoved } = props.listData;
  const setId: string = `${id}`;
  
  const changeCheckedState = (ofId : string) => {
    props.list[parseInt(ofId)].isChecked = !props.list[parseInt(ofId)].isChecked;
    props.setList([...props.list]);  
  }

  const removeList = (ofId : string) => {
    props.list[parseInt(ofId)].isRemoved = !props.list[parseInt(ofId)].isRemoved;
    props.setList([...props.list]);  
  }
  
  if(!isRemoved) return (
    <div className="listBox">
     <div className="LBInput"> <input type="checkbox" onClick={() => changeCheckedState(setId)} id={setId} defaultChecked={isChecked}></input> </div>
     <div className="LBHeading"> <h3> {listContent} </h3> </div>
     <div className="LBButton"><button onClick={() => removeList(setId)}> <b>X</b> </button> </div>
    </div>
  ) 
  return <></>
}

export default ToDoLists;