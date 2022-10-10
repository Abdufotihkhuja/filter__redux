import React from "react";

const TableRow = ({ id, idx, title, category, price }) => {
    return (
        <tr key={id}>
            <td>{idx + 1}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{price}</td>
        </tr>
    );
};

export default TableRow;
