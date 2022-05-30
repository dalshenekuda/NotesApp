import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {INote} from "../types/NoteTypes";
import NoteItem from "../components/NoteItem";
import {useDispatch} from "react-redux";
import {getNoteList} from "../actions/NoteAction";


const NotesPage: React.FC = () => {

    const NoteList = useTypedSelector((state) => state.NoteList)
    const {noteList,loading} = NoteList
    const deleteNoteState = useTypedSelector((state) => state.deleteNote)
    const {success:deleteSuccess} = deleteNoteState
    const completeNoteState = useTypedSelector((state) => state.completeNote)
    const {success:completeSuccess} = completeNoteState

    useEffect(() => {
    }, [completeSuccess])
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getNoteList())
    }, [deleteSuccess,completeSuccess])


    return (
        <div className='note-list'>
            <h2 className='note-list__title'>List of notes:</h2>
            {loading  && <p>Loading...</p>}
            {(noteList.length === 0 && !loading) && <p>Where is no notes yet</p>}

            <ul className='note-list__list'>
                {noteList.length !== 0 && noteList.map((note: INote) =>
                    <NoteItem key={note._id} note={note}/>
                )}
            </ul>

        </div>
    );
};

export default NotesPage;