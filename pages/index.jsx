import React from 'react';
import Link from 'next/link';

const HomePage = () => {
	return (
		<div>
			<h1>Alura Cases - Home</h1>
			<Link href='/faq'>
				<a>Ir para a pagina de perguntas</a>
			</Link>
		</div>
	);
};

export default HomePage;
