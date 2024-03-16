// import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   addContactApi,
//   deleteContactApi,
//   fetchContactsApi,
// } from 'api/contacts';

// export const fetchContactsThunk = createAsyncThunk(
//   'contacts/fetchAll',
//   () => fetchContactsApi
// );

// export const addContactThunk = createAsyncThunk(
//   'contacts/addContact',
//   () => addContactApi
// );

// export const deleteContactThunk = createAsyncThunk(
//   'contacts/deleteContact',
//   () => deleteContactApi
// );
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteContactApi,
  fetchContactsApi,
} from 'api/contacts';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await fetchContactsApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const data = await addContactApi(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const data = await deleteContactApi(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
