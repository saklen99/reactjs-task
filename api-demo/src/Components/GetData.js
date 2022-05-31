import React from 'react';
import { useState, useEffect } from 'react';
import PostData from './PostData';

const GetData = () => {
    const [Data, setData] = useState([]);

    const postapi = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
            .then(
                (info) => {
                    setData(info);
                })
    }

    useEffect(() => {
        postapi();
    }, []);

    return (
        <div >
            <div >
                {Data.map((Data) => (
                    <div class="Card" >
                        <h2>ID:{Data.id}</h2>
                        <h4>TITLE:{Data.title}</h4>
                        <p>BODY:{Data.body}</p>
                        <button class="btn">DELETE</button>
                        <PostData first={Data}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GetData;