import React from "react";

const MemePagination = () => {
  return (
    <div className="meme-pagination d-flex justify-content-center mt-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">Previous</li>
          <li className="page-item">1</li>
          <li className="page-item">Next</li>
        </ul>
      </nav>
    </div>
  );
};

export default MemePagination;
