import React from "react";
import { Pagination } from "react-pagination-bar";

const MemePagination = ({
  currentPage,
  pageMemeLimit,
  memeList,
  setCurrentPage,
  loading,
}) => {
  return (
    <div className="meme-pagination d-flex justify-content-center mt-3">
      {loading ? (
        "Loading"
      ) : (
        <Pagination
          initialPage={currentPage}
          itemsPerPage={pageMemeLimit}
          onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={memeList.length}
          pageNeighbours={2}
        />
      )}
    </div>
  );
};

export default MemePagination;
