import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [{
        id: 1,
        title: "Faire la matrice d'Eisenhower",
        completed: false
    }, {
        id: 2,
        title: "Coder projet",
        completed: false
    }],
    reducers: {
        toggleCompletion(state, action){
            const todo = state.find(todo => todo.id === action.payload.id)
            todo.completed = !todo.completed
        }
    }
})

export const selectTodos = state => state
export const { toggleCompletion } = todoSlice.actions

export default todoSlice.reducer