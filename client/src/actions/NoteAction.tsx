import Axios from 'axios';
import {Dispatch} from "redux";
import {
    CompleteNoteTypes,
    CreateNoteTypes,
    DeleteNoteTypes, EditNoteTypes,
    IFetchCreateNoteAction,
    INote,
    NoteByIdTypes
} from "../types/NoteTypes";
import {IFetchNoteListAction, NoteListTypes} from "../types/NoteListTypes";


export const createNote = (note: INote) => async (dispatch:Dispatch<IFetchCreateNoteAction>) => {

    dispatch({
        type: CreateNoteTypes.CREATE_NOTE_REQUEST,
    });
    try {
        const {data} = await Axios.post(`/api/note/create`,{
            note
        });
        dispatch({type: CreateNoteTypes.CREATE_NOTE_SUCCESS, payload: data});
    } catch (error:any) {

        dispatch({type: CreateNoteTypes.CREATE_NOTE_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message});
    }
};

export const getNoteList = () => async (dispatch:Dispatch<IFetchNoteListAction>) => {
    dispatch({
        type: NoteListTypes.NOTE_LIST_REQUEST,
    });
    try {
        const {data} = await Axios.get(`/api/note/list`);
        dispatch({type: NoteListTypes.NOTE_LIST_SUCCESS, payload: data.noteList});
        console.log(data)
    } catch (error:any) {

        dispatch({type: NoteListTypes.NOTE_LIST_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message});
    }
};

export const deleteNote = (id:number) => async (dispatch:Dispatch<any>) => {

    dispatch({
        type: DeleteNoteTypes.DELETE_NOTE_REQUEST,
    });
    try {
        const {data} = await Axios.delete(`/api/note/${id}`
        );
        dispatch({type: DeleteNoteTypes.DELETE_NOTE_SUCCESS, payload: data});
    } catch (error:any) {

        dispatch({type: DeleteNoteTypes.DELETE_NOTE_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message});
    }
};

export const completeNote = (id:number) => async (dispatch:Dispatch<any>) => {

    dispatch({
        type: CompleteNoteTypes.COMPLETE_NOTE_REQUEST,
    });
    try {
        const {data} = await Axios.put(`/api/note/complete/${id}`

        );
        dispatch({type: CompleteNoteTypes.COMPLETE_NOTE_SUCCESS, payload: data});
    } catch (error:any) {

        dispatch({type: CompleteNoteTypes.COMPLETE_NOTE_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message});
    }
};

export const getNoteById = (id:number) => async (dispatch:Dispatch<any>) => {

    dispatch({
        type: NoteByIdTypes.NOTE_BY_ID_REQUEST,
    });
    try {
        const {data} = await Axios.get(`/api/note/${id}`);
        dispatch({type: NoteByIdTypes.NOTE_BY_ID_SUCCESS, payload: data.note});
    } catch (error:any) {

        dispatch({type: NoteByIdTypes.NOTE_BY_ID_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message});
    }
};
export const editNote = (id:number,note:INote) => async (dispatch:Dispatch<any>) => {

    dispatch({
        type: EditNoteTypes.EDIT_NOTE_REQUEST,
    });
    try {
        const {data} = await Axios.put(`/api/note/edit/${id}`,{
            note
        });
        dispatch({type: EditNoteTypes.EDIT_NOTE_SUCCESS, payload: data});
    } catch (error:any) {

        dispatch({type: EditNoteTypes.EDIT_NOTE_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message});
    }
};

