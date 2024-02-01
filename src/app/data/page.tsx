'use client';
import React from 'react';

import { useGetUsersQuery } from '@/apis/dataApi';
import Table from './Table';

export default function page() {
	return (
		<div>
			<Table />
		</div>
	);
}
