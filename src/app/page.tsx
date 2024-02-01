'use client';

import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-40 p-24">
			<h1>Welcome to our website</h1>
			<span className="flex justify-between gap-20">
				<Link href="/signup">
					<button className="bg-blue-600 p-4 text-white rounded-lg hover:bg-opacity-90 transition">
						Sign Up
					</button>
				</Link>
				<Link href="/data">
					<button className="bg-blue-600 p-4 text-white rounded-lg hover:bg-opacity-90 transition">
						Data
					</button>
				</Link>
			</span>
		</main>
	);
}
