import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import type { NextPage } from 'next';

interface PageProps {}

const Page: NextPage<PageProps> = () => {
	return (
		<main className=' relative flex items-center justify-center w-screen h-screen bg-slate-50 p-4'>
			<div className=' absolute h-60 bg-slate-700 w-full top-0'></div>
			<div className=' relative max-w-sm w-full flex flex-col gap-10 px-6 py-8 bg-gray-300 rounded-2xl shadow-md'>
				<h1 className=' text-slate-700 font-bold text-3xl text-center'>
					Login
				</h1>
				<div className='flex flex-col gap-4'>
					<Input type='email' placeholder='Email' />
					<Input type='password' placeholder='Password' />
				</div>
				<Button>Login</Button>
			</div>
		</main>
	);
};

export default Page;
