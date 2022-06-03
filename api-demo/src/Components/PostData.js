import React, { useEffect } from 'react'
import { useState } from 'react';

const PostData = ({ postData, setData, updata }) => {

    const [post, setPost] = useState({
        title: '',
        description: '',
    });

    const [info, setInfo] = useState('')
    useEffect(() => {
        setPost({
            title: updata?.title,
            description: updata?.body
        })
    }, [updata]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const contain = {
            userId: 1,
            title: post.title,
            body: post.description,
        }

        fetch(process.env.REACT_APP_BASE_URL, {
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
            <form>
                <div>
                    <label >Title: </label>
                    <input type="text" value={post.title} name="title" onChange={handleInputChanged} /><br /><br />
                </div>
                <div>
                    <label >Description: </label>
                    <input type="text" value={post.description} name='description' onChange={handleInputChanged} /><br /><br />
                </div>
                <button class="submit" type="submit" onClick={handleSubmit}>ADD DATA</button>
            </form>
        </div>
    )
}

export default PostData