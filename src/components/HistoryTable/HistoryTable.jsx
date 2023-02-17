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

export default function HistoryTable() {
  // const { state, dispatch } = useHistoryContext();
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState();
  const historyRecords=useSelector((state)=>{return state.history})

  const dispatch=useDispatch();

  const handleDelete = async (id) => {
    await api(`http://localhost:4000/history/${id}`, "delete", "","","",JSON.parse(getItem("userInfo")).token).then(
      (data) => {
        dispatch(delHistory(id));
      }
    );
  };

  const editHistory = (row) => {
    // navigate("/newaccount", { state: { user: row } });
  };
  const linkFollow = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button
        className="general-btn"
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
      <Button className="general-btn" onClick={() => handleDelete(row.id)}>
        <i className="fa fa-trash "></i>
      </Button>
    );
  };
  const methodFormatter = (cell, row, rowIndex, formatExtraData) => {
    return <p className={`method ${cell}`}>{cell}</p>;
  };

  const columns = [
    { dataField: "id", text: "Id", sort: true, width: 100 },
    { dataField: "url", text: "URL" },
    {
      dataField: "method",
      text: "Method",

      formatter: methodFormatter,
    },
    { dataField: "delete", text: "Delete", formatter: deleteFormatter },
    { dataField: "edit", text: "Edit", formatter: linkFollow },
  ];
  const rowEvents = {
    onDoubleClick: (e, row, rowIndex) => {
      setItem(row);

      setModalShow(true);
    },
  };


 
  return (
    <div className="table-horiz-scroll mt-3">
      <Table
        data={historyRecords}
        columns={columns}

        rowEvents={rowEvents}
      />
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
