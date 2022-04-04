import React from "react";
const User=(props)=>{
    const { data }=props;
        return (
            <>
               <h1>User Component</h1>
               <p>{data.name}</p>
               <p>{data.lastName}</p>
            </>
        );
}

export default User;