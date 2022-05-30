import React from 'react';
import {Formik} from "formik";
import {INote} from "../types/NoteTypes";
import {createNote} from "../actions/NoteAction";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {validationSchema} from "../utils/validation";


const AddNotePage: React.FC = () => {
    
    const createNoteState = useTypedSelector((state) => state.createNote)
    const {error,note} = createNoteState
    
    const dispatch =useDispatch()

    const submit = (values: INote, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const note = {
            title: values.title,
            description: values.description,
        }
        // @ts-ignore
        dispatch(createNote(note))
        setSubmitting(false);
        values.title=''
        values.description=''
    }

    return (
        <div className="add-note">
            <h2>Add new note</h2>

            {error && <p className='text-error add-note__text-message'>{error}</p>}
            {note && <p className='text-success add-note__text-message'>Note created successfully!</p>}

            <Formik
                initialValues={{title: '', description: ''}}
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
                                    disabled={isSubmitting}>Add note
                            </button>

                    </form>

                )}
            </Formik>
        </div>
    );
};

export default AddNotePage