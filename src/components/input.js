import React, { useState, useRef, useEffect} from 'react'

const Body = (props) => {
    const {name, setName} = props
    const refName = useRef();

    // Use effect to reference input element and focused upon it
    useEffect(() =>{
        refName.current.focus();
    }, [name])
    // Function which sets new name, triggered on click via button below
    const inputName = () =>{
        setName(refName.current.value)
    }
    return (
        <div className="input-container">
            <div className="input-fields">
                <input className="input-area" ref={refName} type="text" name="name" id="name" placeholder="Name" />
                <button className="input-btn" onClick={() => inputName()}>Submit</button>
            </div>
        </div>
    );
};

export default Body;