import {
    IFetchNoteListAction,
    INoteListState, NoteListTypes
} from "../types/NoteListTypes";
import {
    CompleteNoteTypes,
    CreateNoteTypes,
    DeleteNoteTypes,
    EditNoteTypes,
    IFetchCreateNoteAction,
    INoteState, NoteByIdTypes
} from "../types/NoteTypes";

const noteInitialState: INoteState = {
    error: null,
    loading: false,
    note:null
}

const noteListInitialState: INoteListState = {
    error: null,
    loading: false,
    noteList: []

}

export const createNoteReducer = (state = noteInitialState, action: IFetchCreateNoteAction): INoteState => {
    switch (action.type) {
        case CreateNoteTypes.CREATE_NOTE_REQUEST:
            return {loading: true, error: null, note:null};
        case CreateNoteTypes.CREATE_NOTE_SUCCESS:
            return {loading: false, error: null, note: action.payload};
        case CreateNoteTypes.CREATE_NOTE_FAIL :
            return {loading: false, error: action.payload, note: null};
        default:
            return state;
    }
};
export const NoteListReducer = (state = noteListInitialState, action: IFetchNoteListAction): INoteListState => {
    switch (action.type) {
        case NoteListTypes.NOTE_LIST_REQUEST:
            return {loading: true, error: null, noteList:[]};
        case NoteListTypes.NOTE_LIST_SUCCESS:
            return {loading: false, error: null, noteList: action.payload};
        case NoteListTypes.NOTE_LIST_FAIL :
            return {loading: false, error: action.payload, noteList: []};
        default:
            return state;
    }
};

export const deleteNoteReducer = (state = {}, action:any):any  => {
    switch (action.type) {
        case DeleteNoteTypes.DELETE_NOTE_REQUEST:
            return {loading: true, error: null, success: false};
        case DeleteNoteTypes.DELETE_NOTE_SUCCESS:
            return {loading: false, error: null,success: true};
        case DeleteNoteTypes.DELETE_NOTE_FAIL :
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const completeNoteReducer  = (state = {}, action:any):any  => {
    switch (action.type) {
        case CompleteNoteTypes.COMPLETE_NOTE_REQUEST:
            return {loading: true, error: null, success: false};
        case CompleteNoteTypes.COMPLETE_NOTE_SUCCESS:
            return {loading: false, error: null,success: true};
        case CompleteNoteTypes.COMPLETE_NOTE_FAIL :
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const getNoteByIdReducer = (state = noteInitialState, action:any):INoteState  => {
    switch (action.type) {
        case NoteByIdTypes.NOTE_BY_ID_REQUEST:
            return {loading: true, error: null, note:null};
        case NoteByIdTypes.NOTE_BY_ID_SUCCESS:
            return {loading: false, error: null, note:action.payload};
        case NoteByIdTypes.NOTE_BY_ID_FAIL :
            return {loading: false, error: action.payload, note: null};
        default:
            return state;
    }
};

export const editNoteReducer = (state = {}, action:any):any  => {
    switch (action.type) {
        case EditNoteTypes.EDIT_NOTE_REQUEST:
            return {loading: true, error: null, note:null};
        case EditNoteTypes.EDIT_NOTE_SUCCESS:
            return {loading: false, error: null, success: true};
        case EditNoteTypes.EDIT_NOTE_FAIL :
            return {loading: false, error: action.payload, note: null};
        default:
            return state;
    }
};







