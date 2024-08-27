'use client';
import ErrorMsg from './components/Error'; // Error components must be Client components

export default function RootErrorBoundary() {
	return <ErrorMsg />;
}
