import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  produits: [],
}

const cartSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    ajoutProduit: (state, action) => {
      const product = {'quantite': 1, 'produit': action.payload};
      state.produits.push(product);
    },
    suppressionProduit: (state, action) => {

    },
    viderPanier: (state) => {

    }
  }
});

export const {ajoutProduit, suppressionProduit, viderPanier} = cartSlice.actions;

export default cartSlice.reducer;
