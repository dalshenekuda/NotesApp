export interface INote {
    _id?: number
    title: string
    description: string
    completed?: boolean
}
export interface INoteItem {
    note: {
        _id?: number
        title: string,
        description: string,
        completed?: boolean
    }
}
export enum CreateNoteTypes {
    CREATE_NOTE_REQUEST = 'CREATE_NOTE_REQUEST',
    CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS',
    CREATE_NOTE_FAIL = 'CREATE_NOTE_FAIL'
}

export enum DeleteNoteTypes {
    DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST',
    DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS',
    DELETE_NOTE_FAIL = 'DELETE_NOTE_FAIL'
}

export enum EditNoteTypes {
    EDIT_NOTE_REQUEST = 'EDIT_NOTE_REQUEST',
    EDIT_NOTE_SUCCESS = 'EDIT_NOTE_SUCCESS',
    EDIT_NOTE_FAIL = 'EDIT_NOTE_FAIL'
}

export enum CompleteNoteTypes {
    COMPLETE_NOTE_REQUEST = 'COMPLETE_NOTE_REQUEST',
    COMPLETE_NOTE_SUCCESS = 'COMPLETE_NOTE_SUCCESS',
    COMPLETE_NOTE_FAIL = 'COMPLETE_NOTE_FAIL'
}
export enum NoteByIdTypes {
    NOTE_BY_ID_REQUEST = 'NOTE_BY_ID_REQUEST',
    NOTE_BY_ID_SUCCESS = 'NOTE_BY_ID_SUCCESS',
    NOTE_BY_ID_FAIL = 'NOTE_BY_ID_FAIL'
}


export interface INoteState {
    error: null | string
    loading: boolean
    note: {
        title: string
        description: string
        completed: boolean
    } | null
}


interface IFetchCreateNoteRequest {
    type: CreateNoteTypes.CREATE_NOTE_REQUEST
}

interface IFetchCreateNoteSuccess {
    type: CreateNoteTypes.CREATE_NOTE_SUCCESS
    payload: {
        title: string
        description: string
        completed: boolean
    }
}

interface IFetchCreateNoteFail {
    type: CreateNoteTypes.CREATE_NOTE_FAIL
    payload: string | any
}


export type IFetchCreateNoteAction = IFetchCreateNoteRequest | IFetchCreateNoteSuccess | IFetchCreateNoteFail
