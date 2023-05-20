import * as Yup from 'yup';

export const SongSchema = Yup.object().shape({
    title: Yup.string().required(),
    cover: Yup.string().required(),
    duration: Yup.number().positive().required(),
    songURL: Yup.string().required()
})