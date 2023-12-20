import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employees: [],
    employee: {},
};

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setEmployees: (state, { payload }) => {
            console.log('setEmployees');
            state.employees = payload;
        },
        setEmployee: (state, { payload }) => {
            console.log('setEmployee');
            state.employee = payload;
        },
        resetEmployee: (state) => {
            console.log('resetEmployee');
            state.employee = {};
        },
    },
});

export const employeeReducer = employeeSlice.reducer;

export const { setEmployees, setEmployee, resetEmployee } = employeeSlice.actions;
