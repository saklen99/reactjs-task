import React from 'react';
import { useState } from 'react';
import classes from './module.css';


const GetData = () => {
    const [Data, setData] = useState([]);
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
        .then(
            (info) => {
                setData(info)
                
            })
    return (
        <div className={'classes.form'}>

            <div >

                {Data.map((Data) => (
                    <div class="card" >
                            
                        <h2>ID:{Data.id}</h2>
                        <h5>TITLE:{Data.title}</h5>
                        <p>BODY:{Data.body}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default GetData