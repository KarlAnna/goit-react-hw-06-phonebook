import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { nanoid } from 'nanoid';

const contactsInitialState = {contacts: []}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer({ contacts }, { payload }) {
                contacts.push(payload)
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        removeContact({ contacts }, { payload }) {
            const index = contacts.findIndex(contact => contact.id === payload)
            contacts.splice(index, 1)
        }
    }
})

const persistConfig = {
  key: 'contacts',
  storage,
}

export const getContacts = state => state.contacts
export const getFilterValue = state => state.filter
 
export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)
export const { addContact, removeContact } = contactsSlice.actions