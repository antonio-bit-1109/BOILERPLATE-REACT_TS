// slice per il salvataggio del token utente
import { createSlice } from "@reduxjs/toolkit";
import { MainState_Interface } from "../../interfaces/Interfaces";
// import {  } from "../../interfaces/MainStateInterface";

const initialState: MainState_Interface = {
    statoGenerico: 0,
};

const stateReducerSlice = createSlice({
    name: "stateReducerSlice",
    initialState,
    reducers: {
        setStatoGenerico: (state, action) => {
            state.statoGenerico = action.payload;
        },
    },
});

// Esporto solo l'azione definita nello slice
export const { setStatoGenerico } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
