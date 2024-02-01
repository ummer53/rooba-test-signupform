'use client';

import React from 'react';
import Input from '../../../components/Input';
import { FormModel } from './schema';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
	formModel: FormModel;
};

export default function FieldConFirmPassword({ formModel }: Props) {
	const [showPassword, setShowPassword] = React.useState(false);
	const [type, setType] = React.useState('password');
	return (
		<div>
			<Input
				type={type}
				label="Password"
				placeholder={formModel.confirmPassword}
				name="confirmPassword"
				formModel={formModel}
			>
				{showPassword ? (
					<FontAwesomeIcon
						icon={faEyeSlash}
						onClick={() => {
							setShowPassword(!showPassword);
							setType(() => 'password');
						}}
					/>
				) : (
					<FontAwesomeIcon
						icon={faEye}
						onClick={() => {
							setShowPassword(!showPassword);
							setType(() => 'text');
						}}
					/>
				)}
			</Input>
		</div>
	);
}
