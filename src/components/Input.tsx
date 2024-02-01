import React from 'react';
import {
	FieldErrors,
	UseFormRegisterReturn,
	useFormContext,
} from 'react-hook-form';

type Props = {
	register?: UseFormRegisterReturn;
	errors?: FieldErrors;
	type?: string;
	placeholder?: string;
	label?: string;
	name: string;
	children?: React.ReactNode;
	value?: string;
	className?: string;
	formModel?: any;
};

export default function Input({
	type,
	placeholder,
	label,
	name,
	value,
	className,
	children,
	formModel,
}: Props) {
	if (className === undefined) {
		className =
			'w-full rounded-lg border border-stroke bg-white py-4 pl-6 pr-10 outline-none focus:border-blue-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary';
	}

	const {
		register,
		formState: { errors },
	} = useFormContext<typeof formModel>();

	return (
		<div>
			<label className="mb-2 block font-medium text-black dark:text-white">
				{label}
			</label>

			<div className="relative flex flex-col">
				<input
					value={value}
					type={type || 'text'}
					placeholder={placeholder}
					{...register(name)}
					className={className}
				/>
				{errors && errors[name] && (
					<span className="text-red-800">
						{String(errors?.[name]?.message)}
					</span>
				)}

				<span className="absolute  right-4 top-4">{children}</span>
			</div>
		</div>
	);
}
