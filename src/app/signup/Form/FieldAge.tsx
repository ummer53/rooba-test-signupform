'use client';

import Input from '../../../components/Input';
import { FormModel } from './schema';

type Props = {
	formModel: FormModel;
};

export default function FieldAge({ formModel }: Props) {
	return (
		<div>
			<Input
				label="Age"
				placeholder={formModel.name}
				name="age"
				formModel={formModel}
			/>
		</div>
	);
}
