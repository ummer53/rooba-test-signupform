import * as yup from 'yup';

const schema = yup.object().shape({
	age: yup.number().required().positive().integer(),
	name: yup.string().required(),
	country: yup.string().required(),
});

export type FormModel = {
	age: number;
	name: string;
	country: string;
};

export default schema;
