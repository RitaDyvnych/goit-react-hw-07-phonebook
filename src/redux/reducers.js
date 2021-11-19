import { createReducer, createSlice } from '@reduxjs/toolkit';
import { changeFilter } from './actions';
import { getThunkData, addThunkData, deleteThunkData } from './operations';

const contactSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contact: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getThunkData.pending]: (state, action) => ({
        ...state,
        loading: true,
    }),
    [getThunkData.fulfilled]: (state, action) => ({
        ...state,
        contact: action.payload,
        loading: false,
    }),
    [getThunkData.rejected]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
    }),
    [addThunkData.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [addThunkData.fulfilled]: (state, action) => {
      return {
        ...state,
        contact: [...state.contact, action.payload],
        loading: false,
      };
    },
    [addThunkData.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    [deleteThunkData.pending]: (state, action) => ({
        ...state,
        loading: true,
    }),
    [deleteThunkData.fulfilled]: (state, action) => ({
      ...state,
      contact: state.contact.filter(({ id }) => id !== action.payload),
      loading: false,
    }),
    [deleteThunkData.rejected]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
    }),
  }
});
export default contactSlice.reducer;

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

// function filterContact(state = {}, action) {
//   return { ...state, filter: action.payload };
// }
// function addContact(state = {}, action) {
 
//   if (!state.contacts.find((el) => el.name === action.payload[0])) {
//     const data = [...state.contacts, { name: action.payload[0], number: action.payload[1], id: uuidv4() }];
//     localStorage.setItem('contacts', JSON.stringify(data));
//     return { ...state, contacts: data };
//     } else {
//     alert(`${action.payload[0]} is already in contacts`);
//     return state;
//     }
// }



// function deleteContact(state = {}, action) {
//   const data = state.contacts.filter((elem) => elem.id !== action.payload);
//   localStorage.setItem('contacts', JSON.stringify(data));
//   return { ...state, contacts: data };
// }

// export const reducer = createReducer({}, {
//   [contactSubmit]: addContact,
//   [changeFilter]: filterContact,
//   [contactDelete]: deleteContact,
// })