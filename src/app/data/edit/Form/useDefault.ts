import { useLocation } from 'react-router-dom';
import { FormModel } from './schema';
import _ from 'lodash';
import { useGetUserQuery } from '@/apis/dataApi';

const empty: FormModel = {
	age: -1,
	name: '',
	country: '',
};

export const useDefaultValues = ({ id }: { id: string }) => {
	const formModel = _.cloneDeep(empty);

	const { data: user, isLoading } = useGetUserQuery(id);

	if (user) {
		formModel.age = user.age;
		formModel.name = user.name;
		formModel.country = user.country;
	}

	return {
		user: formModel,
		isLoading,
	};
};
