/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';

const ExternalUser = () => {

   const [users,setUsers]= useState([]);
    
   useEffect( ()=> {
        
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUsers(data))
    }, []);
    return (
      <div>
        <h1> External User</h1>
        <p>{users.length}</p>
        {users.map((user) => (
          <User name={user.name} email={user.email} />
            
          
        ))}
      </div>
    );
};

function User (props){
    return(
        <div style={{ color:"white", border:"2px solid blue", margin: "20px", borderRadius:"20px", backgroundColor:"navy"}}>
            <h3> Name: {props.name}</h3>
            <h4> Email: {props.email}</h4>
        </div>
    )
}

export default ExternalUser;