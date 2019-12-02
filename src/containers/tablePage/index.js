import React, {useEffect, useState} from 'react';

import Table from '../../components/table/table';


export default () => {

    useEffect(()=>{
        let loggedIn=localStorage.getItem("token");
        if(!loggedIn){
            window.location.replace('/login');
        }
        },[]

    );
    const logout=()=>{
      localStorage.removeItem("token") ;
      window.location.replace('/login');
    };
    return (
        <>
        <button onClick={()=>logout()}>Logout</button>
        <Table/>
        </>

    );
}