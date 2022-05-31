import React from 'react'
import classes from './module.css';
import Card from './Card.css';
import { useState } from 'react';

const PostData = (props) => {

    const [Data, SetData] = useState({
        title: " ",
        description: " ",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(title, description);
        const contain = {
            userId: 1,
            title: title,
            body: description,

        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'content-type': 'application/JSON' },
            body: JSON.stringify(contain)
        }
        ).then((res) => res.json).then((json) => console.log(json));


    }


    const handleInputChanged = (e) => {

        const { name, value } = e.target;
        SetData((pre) => {
            return {
                ...pre,
                [name]: value,
            };
        });

    }
    const { title, description } = Data;

    return (
        <div >

            <form className={'classes.form'}>
                <div>
                    <label >Title: </label>
                    <input type="text" value={title} name="title" onChange={handleInputChanged} /><br /><br />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" value={description} name='description' onChange={handleInputChanged} /><br /><br />
                </div>
                <button type="submit" onClick={handleSubmit}>SUBMIT</button>

            </form>
        </div>
    )
}

export default PostData