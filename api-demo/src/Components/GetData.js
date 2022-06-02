import React from 'react';
import { useState, useEffect } from 'react';
import PostData from './PostData';

const GetData = () => {
    const [Data, setData] = useState([]);
    const[updata,setupdata]=useState();
   

    const postapi = () => {
        console.log(process.env.REACT_APP_BASE_URL)
        fetch(process.env.REACT_APP_BASE_URL +'posts').then(res => res.json())
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

    
    const updateuser = (id) => {
        console.log('id',Data[id-1])
        // let Data = {Data}[id];
        // setData(Data.title);
        // setData(Data[id-1].post.title)

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(Data[id-1])
          }).then((result) => {
            result.json().then((resp) => {
                setupdata(resp);
                console.log('resssss',resp)
              
            })
          })
    }

    return (
        <div >
            <div >
                <PostData postData={Data}
                    setData={setData} 
                    updata={updata}
                   />

                {Data.map((Data) => (
                    <div class="Card" >
                        <h2>ID:{Data.id}</h2>
                        <h4>TITLE:{Data.title}</h4>
                        <p>BODY:{Data.body}</p>
                        <button onClick={() => deleteData(Data.id)}>DELETE</button><br />
                        <button onClick={() => updateuser(Data.id)}>UPDATE</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GetData;