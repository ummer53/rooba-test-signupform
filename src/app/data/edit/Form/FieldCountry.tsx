import { useFormContext } from 'react-hook-form';
import { FormModel } from './schema';

type Props = {
	formModel: FormModel;
};

export default function FieldCountry({ formModel }: Props) {
	const {
		register,
		formState: { errors },
	} = useFormContext<FormModel>();
	return (
		<div>
			<label className="mb-2 block font-medium text-black dark:text-white">
				Country
			</label>

			<div className="relative flex flex-col">
				<input
					type={'text'}
					placeholder={formModel.country}
					{...register('country')}
					className="w-full rounded-lg border border-stroke bg-white py-4 pl-6 pr-10 outline-none focus:border-blue-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
				/>
				{errors && errors['country'] && (
					<span className="text-red-800">
						{String(errors?.['country']?.message)}
					</span>
				)}
			</div>
		</div>
	);
}
