import type { NextPage } from 'next';
import NavLink from '../ui/NavLink';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: NextPage<NavbarProps> = () => {
	return (
		<aside className=' w-60 shrink-0 flex flex-col gap-8 h-screen'>
			<div className=' flex flex-col text-xl font-bold text-slate-100 items-center w-full bg-slate-800 p-6 rounded-br-xl'>
				<Link
					href='/'
					className=' flex flex-col items-center justify-center cursor-pointer group'>
					<p className=' leading-6'>E-store</p>
					<p className=' leading-9 text-4xl border-t-2 px-0 group-hover:px-1 transition-all duration-150'>
						ERP
					</p>
				</Link>
			</div>
			<div className='flex flex-col gap-1 text-xl font-medium grow'>
				<NavLink href='/products' text='Products' />
				<NavLink href='/users' text='Users' />
				<NavLink href='/stats' text='Stats' />
				<NavLink href='/works' text='Works' />
			</div>
			<div className='w-full flex justify-between items-center px-3 py-5 text-lg font-semibold bg-slate-300 '>
				<p>User User</p>
				<p>{'<]'}</p>
			</div>
		</aside>
	);
};

export default Navbar;
