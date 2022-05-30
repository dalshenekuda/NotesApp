import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {completeNote, deleteNote} from "../actions/NoteAction";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {INoteItem} from "../types/NoteTypes";
import {Link} from "react-router-dom";


const NoteItem: React.FC<INoteItem> = ({note}) => {

    const dispatch = useDispatch()
    const deleteHandler = () => {
        // @ts-ignore
        dispatch(deleteNote(note._id))
    }

    const completeHandler = () => {
        // @ts-ignore
        dispatch(completeNote(note._id))
    }


    return (
        <div className='note'>
            <div>
                <p className='note__title'>{note.title}</p>
                <p className='note__description'>{note.description}</p>
            </div>
            <div className="note__actions ">
                {!note.completed ?
                <p className="note__action"
                   onClick={completeHandler}>
                    Complete
                </p>: <p className="note__completed">Completed</p>}
                <p className="note__action"
                   onClick={deleteHandler}
                >
                    Delete</p>
                <Link className="note__action" to={`/edit/${note._id}`}>Edit</Link>
            </div>
        </div>
    );
};

export default NoteItem;