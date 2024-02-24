'use client';
import clsx from 'clsx';
import type { NextPage } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
	href: URL | string;
	text: string;
}

const NavLink: NextPage<NavLinkProps> = ({ href, text }) => {
	const pathname = usePathname();
	return (
		<Link
			className=' py-1 px-4 w-full relative group cursor-pointer '
			href={href}>
			<p className=''>{text}</p>
			<div
				className={clsx(
					' -z-10 absolute top-0 bottom-0 right-0 transition-all bg-slate-300 ',
					(href === pathname && 'w-full') || 'w-1 group-hover:w-full'
				)}></div>
		</Link>
	);
};

export default NavLink;
