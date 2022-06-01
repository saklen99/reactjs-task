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

    const deleteData = (id) => {
        console.log('id', id)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        }).then((res) => {
            res.json().then((respons) => {
                console.log(respons);

            })
        })
    }

    return (
        <div >
            <div >
                <PostData postData={Data}
                    setData={setData} />

                {Data.map((Data) => (
                    <div class="Card" >
                        <h2>ID:{Data.id}</h2>
                        <h4>TITLE:{Data.title}</h4>
                        <p>BODY:{Data.body}</p>
                        <button onClick={() => deleteData(Data.id)}>DELETE</button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default GetData;