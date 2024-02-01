import { FormModel } from './schema';
import Input from '../../../components/Input';

type Props = {
	formModel: FormModel;
};

export default function FieldCountry({ formModel }: Props) {
	return (
		<div>
			<Input
				type="select"
				label="Country"
				placeholder={formModel.country}
				name="country"
				formModel={formModel}
			/>
		</div>
	);
}
