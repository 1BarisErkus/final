import React from "react";

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="mt-4 mb-5">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Library
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
