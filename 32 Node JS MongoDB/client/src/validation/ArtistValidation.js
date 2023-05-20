import * as Yup from 'yup';

export const ArtistSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    age: Yup.number().min(17).required("age is required"),
    imageURL: Yup.string().required("image is required")
})