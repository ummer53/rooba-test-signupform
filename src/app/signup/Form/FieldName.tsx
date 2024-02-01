'use client';

import Input from '../../../components/Input';
import { FormModel } from './schema';

type Props = {
	formModel: FormModel;
};

export default function FieldName({ formModel }: Props) {
	return (
		<div>
			<Input
				label="Name"
				placeholder={formModel.name}
				name="name"
				formModel={formModel}
			/>
		</div>
	);
}
