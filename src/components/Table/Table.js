import React from "react";
import styles from "./Table.module.scss";
import { TableFilterForm, TableHead, TableRow } from "../index";
import { useSelector } from "react-redux";

const Table = () => {
    const { filteredProducts, products } = useSelector(
        (state) => state.products
    );

    return (
        <div className={`${styles.Table}`}>
            <TableHead />
            <TableFilterForm />
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>category</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {products &&
                        filteredProducts.map((product, idx) => (
                            <TableRow {...product} key={product.id} idx={idx} />
                        ))}
                </tbody>
            </table>
            {!filteredProducts && <p>There is not such kind of products</p>}
        </div>
    );
};

export default Table;
