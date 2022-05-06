import React from "react";
import {useState} from 'react';
import Data from './Data';

function Formin()
{
    const [name, setName] = useState('');
    const [email, setName2] = useState('');
    const [contact, setName3] = useState('');
    
        const changen=(event)=>
        {
                setName(event.target.value);
        };
        const changee=(event)=>
        {
                setName2(event.target.value);
        };
        const changec = (event)=>
        {
                setName3(event.target.value);
        };
    
        const addvalue = (event) => {
            
            event.preventDefault();
            const val = {
              name,
              email,
              contact,
            };
            
            console.log(val);
        };         

    return(
        
        <form >
            <div>
            <Data val={val}/>
                
               name: <input type="text" name="name" value={name} onChange={changen} /><br/><br/>
                
             
               Email: <input type="email" name="email" value={email} onChange={changee}/><br/><br/>
            
            
                Contect :<input type="text" name="phone" value={contact} onChange={changec}/><br/><br/>
    
            
                <button type="submit" onClick={addvalue}>Add</button>
            </div>
            </form>
    );    
}
export default Formin;