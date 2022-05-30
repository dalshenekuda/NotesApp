export enum NoteListTypes {
    NOTE_LIST_REQUEST = 'NOTE_LIST_REQUEST',
    NOTE_LIST_SUCCESS = 'NOTE_LIST_SUCCESS',
    NOTE_LIST_FAIL = 'NOTE_LIST_FAIL'
}

export interface INoteListState {
    error: null | string
    loading: boolean
    noteList: any
}

interface IFetchNoteListRequest {
    type: NoteListTypes.NOTE_LIST_REQUEST
}

interface IFetchNoteListSuccess {
    type: NoteListTypes.NOTE_LIST_SUCCESS
    payload: {}
}

interface IFetchNoteListFail {
    type: NoteListTypes.NOTE_LIST_FAIL
    payload: string | any
}

export type IFetchNoteListAction = IFetchNoteListRequest | IFetchNoteListSuccess | IFetchNoteListFail


