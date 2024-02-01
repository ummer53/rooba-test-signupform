'use client';
import useSubmitForm from './useSubmitForm';
import Input from '../../../components/Input';
import { FormProvider } from 'react-hook-form';
import FieldEmail from './FieldEmail';
import FieldCountry from './FieldCountry';
import FieldName from './FieldName';
import FieldPassword from './FieldPassword';
import FieldConFirmPassword from './FieldConfirmPassword';
import FieldAge from './FieldAge';

export default function Form() {
	const { methods, onSubmit } = useSubmitForm();
	const user = {
		name: 'John Doe',
		age: -1,
		email: 'johndoe@gmail.com',
		country: 'India',
		password: '123456',
		confirmPassword: '123456',
	};

	return (
		<div className="flex justify-center h-screen w-full p-40">
			<FormProvider {...methods}>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						methods.handleSubmit((data) => onSubmit(data))();
					}}
					className="grid grid-cols-3 gap-4"
				>
					<span className="col-span-1 flex justify-center">
						<FieldName formModel={user} />
					</span>
					<span className="col-span-1 flex justify-center">
						<FieldEmail formModel={user} />
					</span>
					<span className="col-span-1 flex justify-center">
						<FieldAge formModel={user} />
					</span>
					<span className="col-span-1 flex justify-center">
						<FieldCountry formModel={user} />
					</span>
					<span className="col-span-1 flex justify-center">
						<FieldPassword formModel={user} />
					</span>
					<span className="col-span-1 flex justify-center">
						<FieldConFirmPassword formModel={user} />
					</span>

					<span className="col-span-3 flex justify-center">
						<Input
							className={`w-full cursor-pointer rounded-lg border border-blue-800 bg-blue-600 p-4 text-white transition hover:bg-opacity-90`}
							type="submit"
							value="Sign Up"
							name="sign-up"
						/>
					</span>
				</form>
			</FormProvider>
		</div>
	);
}
