import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Title must be at least 2 characters')
        .max(40, 'Too Long!')
        .required("Title is required"),

    description: Yup.string()
        .min(2, 'Description must be at least 2 characters')
        .max(500, 'Too Long!')
        .required('Description is required'),
})