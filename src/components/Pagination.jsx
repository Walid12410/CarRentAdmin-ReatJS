import React from "react";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
    const generatePagination = () => {
        const pagination = [];

        if (pages <= 5) {
            for (let i = 1; i <= pages; i++) {
                pagination.push(i);
            }
        } else {
            pagination.push(1);
            if (currentPage > 3) pagination.push("...");
            for (let i = Math.max(2, currentPage - 1); i <= Math.min(pages - 1, currentPage + 1); i++) {
                if (!pagination.includes(i)) pagination.push(i);
            }
            if (!pagination.includes(currentPage)) pagination.push(currentPage);
            if (currentPage < pages - 2) pagination.push("...");
            if (pages > 1 && !pagination.includes(pages)) pagination.push(pages);
        }

        return pagination;
    };

    const handlePageClick = (page) => {
        if (page !== "...") setCurrentPage(page);
    };

    const paginationItems = generatePagination();

    return (
        <div className="flex items-center space-x-2 m-2">
            <button
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                onClick={() => setCurrentPage((current) => Math.max(current - 1, 1))}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {paginationItems.map((page, index) => (
                <div
                    key={index}
                    className={`px-4 py-2 cursor-pointer rounded-lg ${currentPage === page ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"
                        } ${page !== "..." ? "hover:bg-gray-200" : ""}`}
                    onClick={() => handlePageClick(page)}
                >
                    {page}
                </div>
            ))}
            <button
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                onClick={() => setCurrentPage((current) => Math.min(current + 1, pages))}
                disabled={currentPage === pages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
