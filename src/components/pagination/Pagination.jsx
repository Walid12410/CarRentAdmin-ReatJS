import "./pagination.css";

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
        <div className="pagination">
            <button
                className="page previous"
                onClick={() => setCurrentPage((current) => Math.max(current - 1, 1))}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {paginationItems.map((page, index) => (
                <div
                    className={`page ${currentPage === page ? "active" : ""}`}
                    onClick={() => handlePageClick(page)}
                    key={index}
                >
                    {page}
                </div>
            ))}
            <button
                onClick={() => setCurrentPage((current) => Math.min(current + 1, pages))}
                disabled={currentPage === pages}
                className="page next"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
