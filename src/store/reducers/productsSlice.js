import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [
            {
                id: "1wer",
                title: "iPhone 12",
                price: "700$",
                category: "electronics",
            },
            {
                id: "2wer",
                title: "Sofa",
                price: "1200$",
                category: "furniture",
            },
            {
                id: "3wer",
                title: "Macbook pro",
                price: "2000$",
                category: "electronics",
            },
            {
                id: "4wer",
                title: "Ipad air",
                price: "600$",
                category: "electronics",
            },
            {
                id: "5wer",
                title: "Chair",
                price: "50$",
                category: "furniture",
            },
            {
                id: "6wer",
                title: "Lacetti",
                price: "8450$",
                category: "cars",
            },
            {
                id: "7wer",
                title: "Spark",
                price: "4450$",
                category: "cars",
            },
        ],
        filteredProducts: [],
        filters: {
            searchField: "",
            category: "all",
        },
    },
    reducers: {
        searchHandler: (state, action) => {
            state.filters.searchField = action.payload;
        },
        categoryHandler: (state, action) => {
            state.filters.category = action.payload;
        },
        filterHandler: (state, action) => {
            const { searchField, category } = state.filters;
            state.filteredProducts = state.products;

            if (searchField) {
                state.filteredProducts = state.filteredProducts.filter(
                    (product) => {
                        return product.title
                            .toLowerCase()
                            .startsWith(searchField.toLowerCase());
                    }
                );
            }
            if (category !== "all") {
                state.filteredProducts = state.filteredProducts.filter(
                    (product) => {
                        return product.category === category;
                    }
                );
            }
        },
    },
});

export const { searchHandler, categoryHandler, filterHandler } =
    productsSlice.actions;
export default productsSlice.reducer;
