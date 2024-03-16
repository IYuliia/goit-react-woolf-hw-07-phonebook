import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://65f560fdf54db27bc023020a.mockapi.io/contacts/',
});

export const fetchContactsApi = async () => {
  const { data } = await instanceContacts.get('contacts');
  return data;
};

export const addContactApi = async contact => {
  const { data } = await instanceContacts.post('contacts', contact);
  return data;
};

export const deleteContactApi = async id => {
  const { data } = await instanceContacts.delete('contacts', {
    params: { id },
  });
  return data;
};
