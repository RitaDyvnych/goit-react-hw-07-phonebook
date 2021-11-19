import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('addContact/request');
export const addContactSuccess = createAction('addContact/success');
export const addContactError = createAction('addContact/error');

export const contactSubmit = createAction('contactSubmit');
export const changeFilter = createAction('changeFilter');
export const contactDelete = createAction('contactDelete');