
    
       
    
        
const  Data = ()=>{
  const info = [
    {
      name : 'sp',
      gmail: 'first@gmail',
      number: 947812,
    },
    {
        name: 'second',
        gmail: 'second@gmail',
        number: 947878912,
      },
      {
        name : 'third',
        gmail: 'third@gmail',
        number: 9789812,
      }
    
  ];
  


      
  return(
            <div>
                
                <table className="table">
                <thead>
                <tr>
                <th scope="col">Name</th>
                 <th scope="col">Gmail</th>
                 <th scope="col">Number</th>
                </tr>
                </thead>
                <tbody>
                  <tr>
                   
                
                
                {info.map((info) => (
                  <div>
                     
                <th scope="row">{info.name}</th>
                <td>{info.gmail}</td>
                <td>{info.number}</td>
                </div>
                ))}
                
                  
                  </tr>
                 </tbody>
                </table>

                </div>
             
  );
              }
  export default Data;
            