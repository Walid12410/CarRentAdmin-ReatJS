import "./table.css";

const Table = ({ columns, rows }) => {
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        {columns?.map((column, index) => (
                            <th key={index}>{column.columnName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns?.map((column, colIndex) => (
                                <td key={colIndex}>{row[column.dataField]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
