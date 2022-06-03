import React from 'react';
import { useState, useEffect } from 'react';
import PostData from './PostData';

const ListDisplay = () => {
    const [Data, setData] = useState([]);
    const [updata, setupdata] = useState();

    const getlist = () => {
        console.log(process.env.REACT_APP_BASE_URL)
        fetch(process.env.REACT_APP_BASE_URL).then(res => res.json())
            .then(
                (info) => {
                    setData(info);
                })
    }

    useEffect(() => {
        getlist();
    }, []);

    const deleteData = (id) => {
        console.log('id', id)
        fetch(process.env.REACT_APP_BASE_URL + `${id}`, {
            method: 'DELETE',
        }).then((res) => {
            res.json().then((respons) => {

                console.log('del', respons);
            })
        })
    }

    const updateuser = (id) => {
        console.log('id', Data[id - 1])

        fetch(process.env.REACT_APP_BASE_URL + `${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Data[id - 1])
        }).then((result) => {
            result.json().then((resp) => {
                setupdata(resp);
                console.log('res', resp)

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
                        <h4>Title:{Data.title}</h4>
                        <p>Body:{Data.body}</p>
                        <button class="button1" onClick={() => deleteData(Data.id)}>DELETE</button><br />
                        <button onClick={() => updateuser(Data.id)}>UPDATE</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListDisplay;