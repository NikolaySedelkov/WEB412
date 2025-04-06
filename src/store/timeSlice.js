import { createSlice } from "@reduxjs/toolkit";

// Slice - это хранилище данных + методы для взаимодействия с ними
const timeSlice = createSlice({
    // Название, ни на что не влият, нигде не используется, но должно быть и должно быть уникальным
    name: 'timeSlice',
    // начальное значение состояния, должно быть объектом
    initialState: { timestamp: 20000 },
    // Набор методов, которые можно производить с состоянием
    reducers: {

        // каждый редьюсер, принимает минимум 1 аргумент
        /*
         * state - текущее значение состояния
         * actions - информация о вызове 
         *  {
         *      ...что-то там
         *      payload - данные, которые были переденые в момент вызова
         *  }
         */
        delta(state, {payload}) {
            state.timestamp += payload;
        }
    }
})

export default timeSlice.reducer;
export const {
    delta
} = timeSlice.actions;