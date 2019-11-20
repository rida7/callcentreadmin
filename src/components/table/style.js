import React from 'react';
export default () => (
    <style js="true">{`


.react-pagination-table .table {
padding:0px!important;
    display: flex!important;
    flex-direction: column!important;
}
.react-pagination-table .table >tbody >tr{
 display: flex!important;
padding:20px!important;
}

.react-pagination-table .table >tbody >tr >td{
 flex: 1!important;


}
.react-pagination-table .table >tbody >tr:nth-child(odd){
    background-color: rgba(0, 0, 0, 0.05);
    border-top: 1px solid #c1c1c145;
    border-bottom: 1px solid #c1c1c145;
}
.react-pagination-table .table >tbody >tr >td:nth-child(1){
    padding-right: 0px;
    padding-left:60px;
    color: #01c2c4;
    text-decoration: none;
    font-weight: 800;
}
.react-pagination-table .table >tbody >tr >td:nth-child(2){
    padding-right: 0px;
    padding-left:10px;
    color: #01c2c4;
    text-decoration: none;
    font-weight: 800;
}
    .header {
      display: flex;
      padding:10px;
}

 .header >div {
        flex: 1;

 }
.header div:nth-child(1){
 padding-left:50px;
}

.header div:nth-child(6){
 padding-right:90px;
}
.header {
      background: #01c2c4;
      color:#fff;
      padding:30px;
      line-height: 1.5;
      font-weight: 600;
      font-size: 15px;
       cursor: pointer;
      div {
        cursor: pointer;

      }
    }
.header2 {
      background: grey;
      color:#fff;
display:flex;
justify-content:space-between;
      line-height: 1.5;
      font-weight: 600;
      font-size: 15px;
       cursor: pointer;
      div {
        cursor: pointer;

      }
    }
.search >input{
    padding: 12px;
}
.search{
margin:15px;
}
.linkCsv{
padding-left:0px;
margin-bottom:10px;
}

.pagination-status{
    color:blue!important;
    display:inline-flex!important;
    list-style-type: none!important;
    margin-block-start: 3em!important;

    margin-inline-start: 600px!important;

}
.pagination-status__btn{
 background: #01c2c4!important;
     padding: 10px!important;
}

.btn-info{
padding:20px;
width:100px;
 margin: 10px;
font-size:12px;
}
    `}</style>
);

