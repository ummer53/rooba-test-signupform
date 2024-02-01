import * as yup from 'yup';

const schema = yup.object().shape({
	email: yup.string().email().required(),
	age: yup.number().required().positive().integer(),
	password: yup
		.string()
		.required()
		.min(8)
		.matches(
			/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*()-_=+[{\\]};:'",<.>\/?`~|]*$/,
			'Password must contain at least one alphanumeric character and may include special characters.'
		),
	confirmPassword: yup
		.string()
		.required('You need to confirm your password')
		.test('passwords-match', 'Passwords must match', function (value) {
			return this.parent.password === value;
		}),
	name: yup.string().required(),
	country: yup.string().required(),
});

export type FormModel = {
	email: string;
	age: number;
	name: string;
	country: string;
	password: string;
	confirmPassword: string;
};

export default schema;
