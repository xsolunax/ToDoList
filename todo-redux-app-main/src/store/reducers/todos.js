import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { todoAPI } from '../../api';

// the outside "thunk creator" function
export const fetchTodos = createAsyncThunk('todos/fetchAll', () => todoAPI.fetchAll());

export const deleteTodo = createAsyncThunk('todo/delete', (id) => {
	// TODO: return a call to the corresponding API method i.e. todoAPI.deleteOne(id)
	return todoAPI.deleteOne(id);
});

export const updateTodo = createAsyncThunk('todo/update', (payload) => {
	// TODO: return a call to the corresponding API method i.e. todoAPI.updateOne(payload)
	const { id, todo } = payload;
	return todoAPI.updateOne({ id, todo });
});

export const addTodo = createAsyncThunk('todo/add', (todo) => {
	// TODO: return a call to the corresponding API method i.e. todoAPI.createOne(todo)
	return todoAPI.createOne(todo);
});

const initialState = [];

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTodos.fulfilled, (state, action) => {
			// Assuming that the API returns an array of todos, you can directly replace the state with the fetched data.
			return action.payload;
		});

		builder.addCase(deleteTodo.fulfilled, (state, action) => {
			// Filter out the deleted todo from the state.
			return state.filter((todo) => todo.id !== action.meta.arg);
		});

		builder.addCase(addTodo.fulfilled, (state, action) => {
			// Append the newly created todo to the state.
			state.push(action.payload);
		});

		builder.addCase(updateTodo.fulfilled, (state, action) => {
			// Find the index of the updated todo and replace it with the updated data.
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			if (index !== -1) {
				state[index] = action.payload;
			}
		});
	},
});

export default todosSlice.reducer;
