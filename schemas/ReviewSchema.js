import * as yup from 'yup';

const ReviewSchema = yup.object({
    title: yup.string()
            .required()
            .min(2),
    body: yup.string()
            .required()
            .min(5),
    rating: yup.string()
            .required()
            .test('is-num-1-5', 'Rating must be number between 1 - 5', (val) => {
                // expected conditions
                return parseInt(val) > 0 && parseInt(val) < 6;
            })
})

export default ReviewSchema;