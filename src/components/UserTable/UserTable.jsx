import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { api } from "../../api";
import { getItem, setItem } from "../../sessionStorage";
import Table from "../Table";

function UserTable(props) {
  const [user, setuser] = useState(JSON.parse(getItem("app-users")) || []);
  const handleDelete = async (id) => {
    await api(
      `http://localhost:5000/user/${id}`,
      "delete",
      JSON.parse(getItem("userInfo")).token
    ).then((data) => {
      fetchData();
      setuser(JSON.parse(getItem("app-users")));
      //   dispatch(delHistory(id));
        toast.success("Deleted");
      //   console.log({ history });
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
      headerStyle: { width: "4%" },
      style: { width: "4%" },
    },
    {
      dataField: "username",
      text: "Email",
      headerStyle: { width: "15%" },
      style: { width: "15%" },
    },
    {
      dataField: "password",
      text: "Password",
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
      //   dispatch(resetState());
      console.log({ data });
      setuser(data);
    });
  };

  useEffect(() => {
    console.log("eeeeeeeeeeeeeeeeeee");
    fetchData();
  }, []);
  //   fetchData()
  return (
    <div className="d-flex flex-column site mt-5">
      <Row className="justify-content-around  mb-3">
        <Col md={8} lg={8} xs={8}>
          <div className="table-horiz-scroll mt-5 mx-3">
            {user && <Table data={user} columns={columns} />}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default UserTable;
