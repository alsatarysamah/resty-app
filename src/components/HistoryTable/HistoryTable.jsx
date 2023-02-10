"use strict";
import "./HistoryTable.css";
import Table from "../../components/Table";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import useHistoryContext from "../../useCon";
import ModalDialog from "../Modal/Modal";

export default function HistoryTable() {
  const { state, dispatch } = useHistoryContext();
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState();
  const [delClick, setDelClick] = useState(true);
console.log({delClick})
  console.log({ state });
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    console.log("click delete");
    setDelClick(true);
    await api(`http://localhost:4000/history/${id}`, "delete", "").then(
      (data) => {
        dispatch({ type: "DEL", paylod: id });
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
    { dataField: "url", text: "URL", sort: true },
    {
      dataField: "method",
      text: "Method",
      sort: true,
      formatter: methodFormatter,
    },
    { dataField: "delete", text: "Delete", formatter: deleteFormatter },
    { dataField: "edit", text: "Edit", formatter: linkFollow },
  ];
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      // console.log({row})
      console.log("click row");
      if (!delClick) {
        setModalShow(true);

        setItem(row);
    setDelClick(false);

      }

    },

  };

  return (
    <div className="table-horiz-scroll mt-3">
      <Table
        data={state.historyRecords}
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
