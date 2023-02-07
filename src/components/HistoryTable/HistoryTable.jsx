"use strict";
import "./HistoryTable.css";
import Table from "../../components/Table";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HistoryTable({historyRecords}) {
  const [users, setUsers] = useState(
    localStorage.getItem("users") ? localStorage.getItem("users") : []
  );
  const navigate = useNavigate();

 const handleDelete =(id)=>{
  console.log("delete");
  // axios.delete(`https://mstart.cleverapps.io/user/${id}`).then ((e)=>{})
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
     <i class="fa fa-trash " ></i>
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://mstart.cleverapps.io/user");
      localStorage.setItem("users", res.data);
      setUsers(res.data);
    };
    fetchData();
  }, []);
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
        <Table data={historyRecords} columns={columns} />
      </div>
    </div>
  );
}
//defaultSorted={defaultSorted}
//
