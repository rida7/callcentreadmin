import React, {useState,useEffect} from 'react';
import Style from './style'
import { CSVLink, CSVDownload } from "react-csv";
import axios from 'axios';
import { TablePagination } from 'react-pagination-table';
import {apiPath} from '../../config'



const arraySort = require('array-sort');

export default () => {

    useEffect(()=> {
        let token = localStorage.getItem("token");
        if(token){
            let header={
                headers:{
                    Authorization:`Bearer ${token}`
                }
            };
            axios.get(apiPath+"/api/team",header).then(res=>{
                setFrontEndTeam(res.data);

            })
        }

    } );




    const [frontEndTeam, setFrontEndTeam ]= useState([]);
    const [nameSortType, setNameSortType] = useState("");


    useEffect(()=>{
        axios.get(apiPath+'/api/team').then(res=>{
            console.log("response", res.data);
            setFrontEndTeam(res.data)

        });
    },[]);

    const [frontEndTeamBackup, setFrontEndTeamBackup] = useState([]);
    const searchHandler = (value) => {
        if (frontEndTeamBackup.length === 0) {
            setFrontEndTeamBackup([...frontEndTeam]);
        }
        setFrontEndTeam([...frontEndTeamBackup.filter(frontEndTeam => frontEndTeam.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1)]);

    };

    const sortBy = (x) => {
        if(!nameSortType || nameSortType==="DESC"){
            setFrontEndTeam(arraySort(frontEndTeam, x));
            setNameSortType("ASC")

        }else {
            setFrontEndTeam(arraySort(frontEndTeam,x ,{reverse: true}  ));
            setNameSortType("DESC")
        }
    };

    return (
        <>
        <div className="header2">
            <div className="search"> SEARCH <input type="text" onChange={event => {
                searchHandler(event.target.value)
            }}/></div>
            <div><CSVLink className="linkCsv" data={frontEndTeam}><button type="button" className="btn btn-info">Export file</button></CSVLink></div>
        </div>


            <div className="header">
            <div  onClick={()=>sortBy('firstName')}>{nameSortType&&nameSortType==="ASC"?"First Name":"First Name"}</div>
            <div onClick={() => sortBy('lastName')}>{nameSortType&&nameSortType==="ASC"?"Last Name":"Last Name"}</div>
            <div onClick={() =>  sortBy('email')}>{nameSortType&&nameSortType==="ASC"?"Email":"Email"}</div>
            <div onClick={() => sortBy('phone')}>{nameSortType&&nameSortType==="ASC"?"Phone":"Phone"}</div>
            <div onClick={() => sortBy('postBody')}>{nameSortType&&nameSortType==="ASC"?"post Body":"post Body"}</div>
            </div>

        { frontEndTeam && frontEndTeam.length !== 0 &&
        <TablePagination

            // headers={}

            data={frontEndTeam}
            columns="firstName.lastName.email.phone.postBody"
            perPageItemCount={11}
            totalCount={frontEndTeam && frontEndTeam.length ? parseInt(frontEndTeam.length / 1) : 1}

        />
        }

           {/*</div>*/}

        <Style/>

        </>
    );


}

