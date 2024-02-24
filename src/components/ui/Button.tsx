import clsx from 'clsx';
import type { NextPage } from 'next';
import { ReactNode } from 'react';

type ButtonType = 'base';

interface ButtonProps {
	children: ReactNode;
	type?: ButtonType;
}

const Button: NextPage<ButtonProps> = ({ children, type = 'base' }) => {
	return (
		<button
			className={clsx(
				' text-xl font-semibold px-6 py-3 rounded-md transition-colors duration-150 group',
				type === 'base' &&
					' bg-gray-800 text-gray-100 hover:bg-gray-700 '
			)}>
			{children}
		</button>
	);
};

export default Button;
