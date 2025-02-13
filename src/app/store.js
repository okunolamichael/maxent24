import { configureStore } from "@reduxjs/toolkit";
import {omdbApi} from '../services/OMDB';

export default configureStore ({
    reducer: {
        [omdbApi.reducerPath]: omdbApi.reducer,
    },
});