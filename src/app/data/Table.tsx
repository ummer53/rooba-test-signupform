'use client';
import {
	useGetUsersQuery,
	useDeleteUserMutation,
	useGetStatsQuery,
} from '@/apis/dataApi';
import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';

export default function Table() {
	const { data, error, isLoading } = useGetUsersQuery(null);
	const [deleteUser, { data: deletedUser }] = useDeleteUserMutation();
	async function handleDelete(_id: string) {
		await deleteUser(_id);
	}

	const router = useRouter();
	const handleEdit = (id: string) => {
		router.push(`/data/edit/${id}`);
	};

	const { data: stats, isLoading: statsLoading } = useGetStatsQuery(null);
	if (isLoading || statsLoading) {
		return <div>Loading...</div>;
	}

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<span className="m-20 w-full flex flex-col justify-start items-center">
				<h1 className="text-2xl font-bold">Stats</h1>
				<span className="flex flex-row justify-between w-[60%]">
					<span className="text-2xl  p-4">
						Total user : {stats && stats[0]?.totalUsers}
					</span>
					<span className=" text-2xl  p-4  ">
						Average Age: {stats && stats[0]?.averageAge.toFixed(2)}
					</span>
					<span className=" text-2xl  p-4">
						Countries: {stats && stats[0]?.uniqueCountries}
					</span>
				</span>
			</span>
			<div>
				<table className="w-full p-20">
					<thead>
						<tr>
							<th className=" border border-black">Id</th>
							<th className=" border border-black">Name</th>
							<th className=" border border-black">Email</th>
							<th className=" border border-black">Age</th>
							<th className=" border border-black">Country</th>
							<th className=" border border-black">Actions</th>
						</tr>
					</thead>
					<tbody>
						{data?.map((user) => {
							return (
								<tr key={user._id}>
									<td className=" border border-black ">
										<span className="w-full p-1 flex justify-center">
											{user._id}
										</span>
									</td>
									<td className=" border border-black">
										<span className="w-full p-1 flex justify-center">
											{user.name}
										</span>
									</td>
									<td className=" border border-black ">
										<span className="w-full p-1 flex justify-center">
											{user.email}
										</span>
									</td>
									<td className=" border border-black ">
										<span className="w-full p-1 flex justify-center">
											{user.age}
										</span>
									</td>
									<td className=" border border-black ">
										<span className="w-full p-1 flex justify-center">
											{user.country}
										</span>
									</td>
									<td className=" border border-black ">
										<span className="w-full p-1 flex justify-center gap-4">
											<button
												onClick={() => handleEdit(user._id)}
												className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
											>
												Edit
											</button>
											<button
												onClick={() => handleDelete(user._id)}
												className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
											>
												Delete
											</button>
										</span>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</Suspense>
	);
}
