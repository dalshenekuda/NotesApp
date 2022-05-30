import {combineReducers} from "redux";
import {
    completeNoteReducer,
    createNoteReducer,
    deleteNoteReducer, editNoteReducer, getNoteByIdReducer,
    NoteListReducer
} from "./noteReducer";


export const RootReducer = combineReducers({
    createNote:createNoteReducer,
    NoteList:NoteListReducer,
    deleteNote:deleteNoteReducer,
    completeNote:completeNoteReducer,
    getNoteById:getNoteByIdReducer,
    editNote:editNoteReducer

});

export type RootState = ReturnType<typeof RootReducer>