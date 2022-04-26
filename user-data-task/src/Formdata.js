import React from "react";
import {useState} from 'react';

function Formdata()
{

    const [data,setdata] = useState(
        {
            'firstname':'',
            'email':'',
            'phone':''
            
        });

           const handleChange=(event)=>{
            let name =event.target.name;
            let value =event.target.value;
         

           setdata({...data,[name] : value});
           console.log(data);
           }

           let handleSubmit =(event) =>{
            event.preventDefault();
            console.log(data);
             }

    




    return(
        <form onClick={handleSubmit}>
            <div>
                <input type="text" name="firstname" value={data.firstname} onChange={handleChange}></input>
            </div>
             <div>
                <input type="email" name="email" value={data.email} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="phone" value={data.phone} onChange={handleChange}></input>
            </div>
            <div>
                <input type="submit"  >submit</input>
            </div>
            </form>
        

    );
}
export default Formdata;