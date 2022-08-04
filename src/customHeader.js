import Image from "next/image";
import React from "react";

const CustomHeader = () => {
  return (
    <div
      className="border-2"
      style={{
        marginLeft: "auto",
        display: "flex",
        justifyContent: "center",
        padding: "16px 0",
        backgroundColor: "#057c097e",
      }}
    >
      <img
        alt="Amplify logo"
        src="logo.svg"
        style={{ display: "block", width: "150px" }}
      />
    </div>
  );
};

export default CustomHeader;
