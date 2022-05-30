import React from 'react'
import classes from './module.css';
import Card from './Card.css';
import { useState } from 'react';

const PostData = () => {
    const [data, setData] = useState('')

    const handleSubmit  = (e) =>
        {
            e.preventDefault();

        
        }

        const handleInputChanged = (e)=>{
            console.log('key', e.target.name)
            const setData={
                    // title:e.target.name,
                    // description:e.target.value
                  
            }
           
            // setData(setData)

        }
    return (
        

        <div class="card">

            <form className={'classes.form'}>

                <div>
                    <label htmlFor='title1'>Title: </label>
                    <input type="text" name="title" onChange={handleInputChanged}/><br /><br />
                </div>
                <div>
                    <label htmlFor='body1'>Body: </label>
                    <input type="text" name='description' onChange={handleInputChanged}/><br /><br />
                </div>
                <button type="submit" onClick={handleSubmit }>SUBMIT</button>

            </form>
        </div>
    )
}

export default PostData