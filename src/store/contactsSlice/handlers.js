export const handleFulfilledContacts = (state, { payload }) => {
  state.contacts.items = payload;
  state.contacts.isLoading = false;
};

export const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};
export const handleRejected = (state, { error }) => {
  state.contacts.error = error.message;
  state.contacts.isLoading = false;
};
