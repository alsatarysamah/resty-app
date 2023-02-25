import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { api } from "../../api";
import { getItem, setItem } from "../../sessionStorage";
import { delUser, resetUser } from "../../store";
import Table from "../Table";

function UserTable(props) {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const users = useSelector((state) => {
    return state.users;
  });
  
  const handleDelete = async (id) => {
    await api(
      `http://localhost:5000/user/${id}`,
      "delete",
      JSON.parse(getItem("userInfo")).token
    ).then((data) => {
      dispatch(delUser(id));
      toast.success("Deleted");
    });
  };
  const deleteFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button
        className="general-btn"
        title="Delete this record"
        onClick={() => handleDelete(row.id)}
      >
        <i className="fa fa-trash "></i>
      </Button>
    );
  };
  const columns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
      headerStyle: { width: "7%" },
      style: { width: "7%" },
    },
    {
      dataField: "username",
      text: "Email",
      headerStyle: { width: "15%" },
      style: { width: "15%" },
    },
    {
      dataField: "firstName",
      text: "First Name",
      headerStyle: { width: "20%" },
      style: { width: "20%" },
    },
    {
      dataField: "lastName",
      text: "Last Name",
      headerStyle: { width: "20%" },
      style: { width: "20%" },
    },
    {
      dataField: "role",
      text: "Role",
      headerStyle: { width: "20%" },
      style: { width: "20%" },
    },
    {
      dataField: "delete",
      text: "Delete",
      formatter: deleteFormatter,
      headerStyle: { width: "10%" },
      style: { width: "10%" },
    },
  ];
  const fetchData = async () => {
    await api(
      `http://localhost:5000/user`,
      "get",
      JSON.parse(getItem("userInfo")).token
    ).then((data) => {
      setItem("app-users", JSON.stringify(data));
      dispatch(resetUser());
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  //   fetchData()
  return (
    <div className="d-flex flex-column site mt-5">
       <ToastContainer
        position="top-center"
        style={{ width: "200px", height: "100px" }}
      />
      <Container className="d-flex justify-content-center ">
        <h2>Users Table</h2>
      </Container>
      <Container className="d-flex justify-content-end fluid">
  <Col xs={3}>
    <Button className="general-btn" onClick={()=>{navigate("/newuser")}}>New User</Button>
  </Col>
</Container>
     
      <Row className="justify-content-center  mb-3">
        <Col md={8} lg={8} xs={8}>
          <div className="table-horiz-scroll mt-5 mx-3">
            {users && <Table data={users} columns={columns} />}
          </div>
        </Col>
      </Row>
      
    </div>
  );
}

export default UserTable;
