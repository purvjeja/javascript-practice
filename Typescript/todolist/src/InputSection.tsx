import React, { MutableRefObject, useRef} from 'react';
import { InputSectionProp,ListArrayObject } from "./Interfaces";

const InputSection = (props : InputSectionProp) => {
    const inputElement = useRef() as MutableRefObject<HTMLInputElement>;
    
    const addList = () => {
      let inputed : string = inputElement.current.value;
      if(inputed === "") return;
      inputElement.current.value = "";
      const defaultObject : ListArrayObject = {
        id: props.list.length,
        listContent: inputed,
        isChecked: false,
        isRemoved :false
      } 
      props.setList([...props.list,defaultObject]);
      props.currentActiveFilter("all");
    }
  
    return (
        <div className="inputAreaSection">
          <input ref={inputElement} defaultValue="" type="text" placeholder=" What's your plan today?" id="input"></input>
          <button onClick={addList}> + </button>
        </div>
    )
  }

export default InputSection;