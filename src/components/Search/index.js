import React from "react";
import "./styles.css";

export const Search = () => {
  return (
    <div className="main-search">
      <input className="btn-search" value={"Search"} />
      <button>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};
