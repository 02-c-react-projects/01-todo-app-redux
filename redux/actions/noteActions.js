export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

//Action creators
export const addNote = (text) => ({type: ADD_NOTE, text:text});
export const deleteNote = (index) => ({type: DELETE_NOTE, index:index})