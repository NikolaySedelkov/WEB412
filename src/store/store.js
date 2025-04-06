import { configureStore } from "@reduxjs/toolkit";
import timeSlice from './timeSlice';
import themeSlice from './themeSlice';

// Создаем состояния для контекста redux
export const store = configureStore({
    // Передаем из каких слайсов оно будет состоять
    reducer: {
        time: timeSlice,
        theme: themeSlice,
    }
});