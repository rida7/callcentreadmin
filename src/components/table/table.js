import React, {useState,useEffect} from 'react';
import Style from './style'
import { CSVLink, CSVDownload } from "react-csv";
import axios from 'axios';
import { TablePagination } from 'react-pagination-table';




const arraySort = require('array-sort');

export default (props) => {



    const [frontEndTeam, setFrontEndTeam ]= useState([]);
    const [nameSortType, setNameSortType] = useState("");


    useEffect(()=>{
        axios.get(' https://json-team-crud.herokuapp.com/api/team').then(res=>{
            console.log("response", res.data);
            setFrontEndTeam(res.data)

        });
    },[]);



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
        <CSVLink className="linkCsv" data={frontEndTeam}><button type="button" className="btn btn-info">Export file</button></CSVLink>

            <div className="header">
            <div  onClick={()=>sortBy('firstName')}>{nameSortType&&nameSortType==="ASC"?"First Name":"First Name"}</div>
            <div onClick={() => sortBy('lastName')}>{nameSortType&&nameSortType==="ASC"?"Last Name":"Last Name"}</div>
            <div onClick={() =>  sortBy('email')}>{nameSortType&&nameSortType==="ASC"?"Email":"Email"}</div>
            <div onClick={() => sortBy('phone')}>{nameSortType&&nameSortType==="ASC"?"Phone":"Phone"}</div>
            <div onClick={() => sortBy('postBody')}>{nameSortType&&nameSortType==="ASC"?"post Body":"post Body"}</div>
            </div>


                <TablePagination

                    // headers={}

                    data={frontEndTeam}
                    columns="firstName.lastName.email.phone.postBody"
                    perPageItemCount={11}
                    totalCount={100}

                />


           {/*</div>*/}

        <Style/>

        </>
    );


}

