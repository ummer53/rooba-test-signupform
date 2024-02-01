'use client';
import { Provider } from 'react-redux';
import './globals.css';
import { store } from '@/store';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Provider store={store}>
				<body className="">{children}</body>
			</Provider>
		</html>
	);
}
