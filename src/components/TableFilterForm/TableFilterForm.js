import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    searchHandler,
    categoryHandler,
    filterHandler,
} from "../../store/reducers/productsSlice";
import styles from "./TableFilterForm.module.scss";

const TableFilterForm = () => {
    const dispatch = useDispatch();
    const { searchField, category } = useSelector(
        (state) => state.products.filters
    );
    const searchFieldHandler = (e) => {
        dispatch(searchHandler(e.target.value));
    };
    const categoryFieldHandler = (e) => {
        dispatch(categoryHandler(e.target.value));
    };
    useEffect(() => {
        dispatch(filterHandler());
    }, [searchField, category, dispatch]);
    return (
        <div className={`${styles.panels} `}>
            <form>
                <div className="form-control">
                    <label htmlFor="search">Search:</label>
                    <input
                        type="text"
                        id="search"
                        value={searchField}
                        placeholder="Search..."
                        onChange={(e) => searchFieldHandler(e)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => categoryFieldHandler(e)}
                    >
                        <option value="all">all</option>
                        <option value="electronics">electronics</option>
                        <option value="furniture">furniture</option>
                        <option value="cars">cars</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default TableFilterForm;
