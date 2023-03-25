import React, {useEffect, useRef, useState} from 'react';
import {data} from '../data';

const EmojisComponent = ({inputText,setInputText,inputTextDom}) => {
    const [emojisList, setEmojisList] = useState(data);
    const [emojisResult,setEmojisResult] = useState(null);
    const [inputEmoji,setInputEmoji] = useState('');
    const inputEmojiDOM = useRef(null);

    const inputEmojiHandler = (e)=>{
        setInputEmoji(e.target.value);
    }
    const addEmoji = (emoji)=>{
        const cursorPos = inputTextDom.current.selectionStart;
        const text = inputText;
        const prev = inputText.slice(0,cursorPos);
        const next = inputText.slice(cursorPos);
        setInputText(prev + emoji + next)
        inputTextDom.current.selectionStart = cursorPos + emoji.length;
    }
    const searchEmojis = ()=>{
        setEmojisResult(emojisList.filter(emoji=>{
            return(
                emoji.name.toLowerCase().includes(inputEmoji) || emoji.keywords.toLowerCase().includes(inputEmoji)
            );
        }))
    }
    
    useEffect(() => {
        searchEmojis();       
    }, [inputEmoji]);
 
    return (
        <div className='EmojisComp' style={{padding:10, backgroundColor:'#303030', borderRadius:3}}>
            <input type="text" className='form-control' value={inputEmoji} 
            onChange={inputEmojiHandler} />

            <div className='row d-flex pt-3'>
                {
                    !emojisResult
                    ?
                    emojisList.map((emoji,index)=>{
                        return <div key={index} className="col-2"><a onClick={()=>addEmoji(emoji.symbol)}><div>{emoji.symbol}</div></a></div>
                    })
                    :
                    emojisResult.map((emoji,index)=>{
                        return <div key={index} className="col-2"><a onClick={()=>addEmoji(emoji.symbol)}><div>{emoji.symbol}</div></a></div>
                    })
 
                }
            </div>
        </div>
    );
}

export default EmojisComponent;
