import Navbar from '@/components/layouts/Navbar';
import type { NextPage } from 'next';
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}
const Layout: NextPage<Readonly<LayoutProps>> = ({ children }) => {
	return (
		<div className='flex w-screen h-screen'>
			<Navbar />
			<div className=' max-h-screen overflow-y-auto w-full h-full p-4'>
				{children}
			</div>
		</div>
	);
};

export default Layout;
