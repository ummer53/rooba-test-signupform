'use client';

import schema, { FormModel } from './schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { User, useGetUserQuery, useUpdateUserMutation } from '@/apis/dataApi';

export default function useSubmitForm({
	user,
	id,
}: {
	user: FormModel;
	id: string;
}) {
	const methods = useForm<FormModel>({
		resolver: yupResolver(schema),
		defaultValues: user,
	});

	const [updateUser] = useUpdateUserMutation();
	const onSubmit = async (data: FormModel) => {
		const res = await updateUser({ ...data, _id: id });

		if ('error' in res) {
			alert(res.error);
			return;
		}

		window.location.href = '/data';
	};

	return { methods, onSubmit };
}
