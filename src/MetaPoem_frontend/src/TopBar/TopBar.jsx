import React, { useState, useEffect } from "react";
import "./TopBar.css";
import { MetaPoem_backend } from "../../../declarations/MetaPoem_backend";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar/Avatar";

export default function TopBar(props) {
  const [active, setActive] = React.useState([]);

  const { id: documentId } = useParams();

  useEffect(() => {
    const getDocName = async () => {
      const dn = await MetaPoem_backend.getDocName(documentId);
      props.setDocName(dn);
    };
    const getActive = async () => {
      var peersActive = await MetaPoem_backend.getActiveUsers(documentId);
      peersActive.reverse();
      setActive(peersActive);
    };
    getDocName();
    const intervalp = setInterval(getActive, 10000);
    return () => clearInterval(intervalp);
  }, []);

  const handleDocNameChange = (event) => {
    props.setDocName(event.target.value);
  };

  const saveDocName = async () => {
    props.updateDocName(documentId, props.docName);
    await MetaPoem_backend.updateDocName(documentId, props.docName);
  };

  const shareBtnClickHandler = () => {
    props.modalHandler();
  };

  var difference = active.length - 7;
  var diffString = "+" + difference;

  return (
    <div className="topBar">
      <div>
        <div style={{ display: "flex" }}>
          <img
            onClick={props.showSidebar}
            src="edit-document.png"
            style={{ height: "35px", marginRight: "30px", cursor: "pointer" }}
          />
          <div style={{ display: "flex" }}>
            <input
              className="docNameInput"
              type="text"
              onChange={(e) => handleDocNameChange(e)}
              value={props.docName}
              onBlur={saveDocName}
            />
          </div>
        </div>
      </div>
      <div className="shareBtnClass">
        <div className="activeee">
          <span
            style={{
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              marginRight: "8px",
            }}
          >
            Active Users:
          </span>{" "}
          <div
            style={{ display: "flex", fontSize: "12px", alignItems: "center" }}
          >
            {active.length == 0
              ? "Connecting..."
              : active.map((a, i) =>
                  i >= 7 ? null : <Avatar a={a} i={i + 1} />
                )}{" "}
            <span style={{ marginLeft: "5px", fontSize: "16px" }}>
              {active.length > 7 ? diffString : null}
            </span>
          </div>
        </div>
        <div>
          <button className="shareBtn" onClick={shareBtnClickHandler}>
            Share
          </button>
          <button
            className="exportBtn"
            style={{ marginLeft: "5px" }}
            onClick={props.exportDoc}
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
}
