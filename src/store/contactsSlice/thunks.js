import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteContactApi,
  fetchContactsApi,
} from 'api/contacts';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  () => fetchContactsApi
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  () => addContactApi
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  () => deleteContactApi
);
