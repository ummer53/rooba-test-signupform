'use client';

import schema, { FormModel } from './schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignUpMutation } from '@/apis/authApi';

export default function useSubmitForm() {
	const methods = useForm<FormModel>({
		resolver: yupResolver(schema),
		defaultValues: {
			email: '',
			age: -1,
			name: '',
			country: '',
			password: '',
			confirmPassword: '',
		},
	});

	const [signUp, { isLoading }] = useSignUpMutation();

	const onSubmit = async (data: FormModel) => {
		const res = await signUp(data);

		if ('error' in res) {
			alert(res.error);
			return;
		}

		window.location.href = '/data';
	};

	return { methods, onSubmit };
}
