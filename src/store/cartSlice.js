import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "panier",
  initialState: [],
  reducers: {
    ajoutProduit: (state, action) => {

    },
    suppressionProduit: (state, action) => {

    },
    viderPanier: (state) => {

    }
  }
});

export const {ajoutProduit, suppressionProduit, viderPanier} = cartSlice.actions;

export default cartSlice.reducer;
