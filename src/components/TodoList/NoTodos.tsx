import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { en } from "../../locale";

export function NoTodos() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FontAwesomeIcon icon={faSmileBeam} size="2x"/>
      <p>{en.noTodos}</p>
    </div>
  )
}