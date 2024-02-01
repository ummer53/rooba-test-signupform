'use client';
import React, { Suspense, useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import useSubmitForm from './useSubmit';
import FieldCountry from './FieldCountry';
import FieldAge from './FieldAge';
import FieldName from './FieldName';
import { useDefaultValues } from './useDefault';

export default function Form() {
	const [id, setId] = React.useState<string>('');
	useEffect(() => {
		const pathArray = window?.location.pathname.split('/');
		const id = pathArray[pathArray.length - 1];
		if (id) {
			setId(id);
		}
	}, []);

	const { user, isLoading } = useDefaultValues({ id });

	const { methods, onSubmit } = useSubmitForm({ user, id });

	return (
		<div className="w-60 mx-auto my-auto h-screen flex flex-col justify-center items-center">
			<FormProvider {...methods}>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						console.log('submitting');

						methods.handleSubmit((data) => onSubmit(data))();
					}}
				>
					<FieldName formModel={user} />
					<FieldCountry formModel={user} />
					<FieldAge formModel={user} />

					<input
						className={`mt-5 w-full cursor-pointer rounded-lg border border-blue-800 bg-blue-600 p-4 text-white transition hover:bg-opacity-90`}
						type="submit"
						value="Update user"
						name="Update user"
					/>
				</form>
			</FormProvider>
		</div>
	);
}
