import React from 'react'
import classes from './module.css';
import Card from './Card.css';
import { useState } from 'react';

const PostData = ({ postData, setData }) => {

    const [post, setPost] = useState({
        title: " ",
        description: " ",
    });
    const [info, setInfo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const contain = {
            userId: 1,
            title: post.title,
            body: post.description,
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'content-type': 'application/JSON' },
            body: JSON.stringify(contain)
        }
        ).then(res => res.json()).then((responce) => setInfo(responce))

        console.log('info', info);
        const newData = [...postData, info]
        setData(newData)
    }

    const handleInputChanged = (e) => {

        const { name, value } = e.target;
        setPost((pre) => {
            return {
                ...pre,
                [name]: value,
            };
        });
    }

    return (
        <div >

            <form className={'classes.form'}>
                <div>
                    <label >Title: </label>
                    <input type="text" value={post.title} name="title" onChange={handleInputChanged} /><br /><br />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" value={post.description} name='description' onChange={handleInputChanged} /><br /><br />
                </div>
                <button type="submit" onClick={handleSubmit}>SUBMIT</button>

            </form>
        </div>
    )
}

export default PostData