"use strict";
import "./HistoryTable.css";
import Table from "../../components/Table";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import { api } from "../../api";
import ModalDialog from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { delHistory } from "../../store";
import { getItem } from "../../sessionStorage";
import { toast, ToastContainer } from "react-toastify";

export default function HistoryTable({ data }) {
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState();
  const isAdmin = JSON.parse(getItem("userInfo")).role === "admin";
  let history = useSelector((state) => {
    return state.history;
  });

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    await api(
      `http://localhost:5000/history/${id}`,
      "delete",
      JSON.parse(getItem("userInfo")).token
    ).then((data) => {
      dispatch(delHistory(id));
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
  const methodFormatter = (cell, row, rowIndex, formatExtraData) => {
    return <p className={`method ${cell}`}>{cell}</p>;
  };

  const columns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
      headerStyle: { width: "8%" },
      style: { width: "8%" },
    },
    {
      dataField: "url",
      text: "URL",
      headerStyle: { width: "20%" },
      style: { width: "20%" },
    },
    {
      dataField: "method",
      text: "Method",

      formatter: methodFormatter,
      headerStyle: { width: "10%" },
      style: { width: "10%" },
    },
    {
      dataField: "delete",
      text: "Delete",
      formatter: deleteFormatter,
      headerStyle: { width: "10%" },
      style: { width: "10%" },
    },
  ];
  if (isAdmin) {
    columns.splice(3, 0, {
      dataField: "userId",
      text: "User ID",
      headerStyle: { width: "10%" },
      style: { width: "10%" },
    });
  }
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      if (item && item.id === row.id) {
        setModalShow(true);
      } else {
        setItem(row);
      }
    },
    onTouchStart: (e, row, rowIndex) => {
      e.preventDefault();
      if (item && item.id === row.id) {
        setModalShow(true);
      } else {
        setItem(row);
      }
    },
  };

  return (
    <div className="table-horiz-scroll mt-3">
        <ToastContainer
        position="top-center"
        style={{ width: "200px", height: "100px" }}
      />
      <Table data={history} columns={columns} rowEvents={rowEvents} />
      {modalShow && (
        <ModalDialog
          show={modalShow}
          onHide={() => setModalShow(false)}
          item={item}
        />
      )}
    </div>
  );
}
