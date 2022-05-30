import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import { editNote, getNoteById} from "../actions/NoteAction";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Formik} from "formik";
import {INote} from "../types/NoteTypes";
import {validationSchema} from "../utils/validation";


const EditNotePage = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const id = params.id;

    const getNoteByIdState = useTypedSelector((state) => state.getNoteById)
    const {note} = getNoteByIdState

    const editNoteState = useTypedSelector((state) => state.editNote)
    const {success, error, loading} = editNoteState


    const submit = (values: INote, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const note = {
            title: values.title,
            description: values.description,
        }
        // @ts-ignore
        dispatch(editNote(id, note))
        setSubmitting(false);
    }

    useEffect(() => {
        // @ts-ignore
        dispatch(getNoteById(id))
    }, [success])

    return (
        <div className="add-note">
            {loading || !note?.title? <h2>Loading...</h2> :
                <>
                    <h2>{`Edit ${note?.title}`}</h2>

                    {error && <p className='text-error add-note__text-message'>{error}</p>}
                    {success && <p className='text-success add-note__text-message'>Note edited successfully!</p>}

                    <Formik
                        initialValues={{
                            title: note?.title ? note.title : '',
                            description: note?.description ? note.description : ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values: INote, {setSubmitting}) => {
                            submit(values, {setSubmitting})
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                          }) => (
                            <form onSubmit={handleSubmit} className='add-note__form'>

                                <div className='input'>
                                    <p className='input__name'>Title</p>
                                    <input
                                        type="title"
                                        name="title"
                                        onChange={handleChange}
                                        placeholder='Enter your title'
                                        onBlur={handleBlur}
                                        value={values.title}
                                        required
                                    />
                                </div>
                                <p className="text-error">{errors.title && touched.title && errors.title}</p>

                                <div className='input'>
                                    <p className='input__name'>Description</p>
                                    <textarea
                                        name="description"
                                        onChange={handleChange}
                                        placeholder='Enter the description'
                                        onBlur={handleBlur}
                                        value={values.description}
                                        required
                                    />
                                </div>
                                <p className="text-error">{errors.description && touched.description && errors.description}</p>

                                <button className=''
                                        type="submit"
                                        disabled={isSubmitting}>Edit note
                                </button>
                            </form>
                        )}
                    </Formik>
                </>
            }

        </div>
    );
};

export default EditNotePage;