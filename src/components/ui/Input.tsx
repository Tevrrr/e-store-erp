import type { NextPage } from 'next';
import { HTMLInputTypeAttribute } from 'react';

interface InputProps {
	type?: HTMLInputTypeAttribute;
	placeholder: string;
}

const Input: NextPage<InputProps> = ({ type = 'text', placeholder }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className=' border-2 rounded-xl border-slate-800 px-3 py-2 text-slate-800 font-medium text-lg bg-black bg-opacity-0'
		/>
	);
};

export default Input;
