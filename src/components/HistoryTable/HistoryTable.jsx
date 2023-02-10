"use strict";
import "./HistoryTable.css";
import Table from "../../components/Table";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import useHistoryContext from "../../useCon";

export default function HistoryTable() {
  const{state}=useHistoryContext();
  console.log({state})
  const navigate = useNavigate();

 const handleDelete =async(id)=>{
  console.log("delete");
  await api(`http://localhost:4000/history/${id}`, "delete", "").then((data) => {

  });

 }

  const editHistory = (row) => {
    // navigate("/newaccount", { state: { user: row } });
  };
  const linkFollow = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button
        onClick={() => {
          editHistory(row);
        }}
      >
        Edit
      </Button>
    );
  };
  const deleteFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button onClick={()=>handleDelete(row.id)} >
     <i className="fa fa-trash " ></i>
</Button>
    );
  };
 
 
  const columns = [
    { dataField: "id", text: "Id", sort: true, width: 100 },
    { dataField: "url", text: "URL", sort: true },
    { dataField: "method", text: "Method", sort: true },
    { dataField: "delete", text: "Delete", formatter: deleteFormatter },
    { dataField: "edit", text: "Edit", formatter: linkFollow },

   
  ];


  return (
    <div className="my-5">
      <h1>Users</h1>
      <div className="d-flex  justify-content-end my-3">
        <Button
          variant="primary"
          size="mg"
          onClick={() => {
            navigate("/newuser");
          }}
        >
          New User
        </Button>
      </div>
      <div className="table-horiz-scroll">
        <Table data={state.historyRecords} columns={columns} />
      </div>
    </div>
  );
}
//defaultSorted={defaultSorted}
//
