import React, { useState,useEffect, useRef } from 'react';
import EmojisComponent from './EmojisComponent';

const InputComponent = () => {
    const [isEmojisOpened, setIsEmojisOpened] = useState(false);
    const inputContainerDom = useRef(null);
    const [inputText,setInputText] = useState('');
    const inputTextDom = useRef(null);
    const handleClickOutside = (event)=>{
        if(inputContainerDom.current && !inputContainerDom.current.contains(event.target)){
            setIsEmojisOpened(false);
        }
    }
    document.addEventListener('click', handleClickOutside);
    

    return (
        <div ref={inputContainerDom}>
            <div style={{display:'flex'}}>
                <input type="text" className='form-control' ref={inputTextDom} 
                value={inputText} onChange={(e)=>setInputText(e.target.value)}/>  
                <a onClick={()=>setIsEmojisOpened(true)}> <i className="fa-sharp fa-solid fa-face-smile ms-3"></i></a>
            </div>
            {
                isEmojisOpened ?
                <EmojisComponent inputText={inputText} setInputText={setInputText} inputTextDom={inputTextDom}/> 
                :
                <div></div>
            }
        </div>
    );
}

export default InputComponent;
