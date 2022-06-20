import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const FAQ_APIuRL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
 const faq = await  fetch(FAQ_APIuRL).then((response) => {
   return response.json();
 })
 .then((resposta) => {
 return resposta
 
  })
 return {
   props: {faq}

}
}

const FaqPage = ({faq}) => {

	return (
		<div>
			<h1>Alura Cases - Faq</h1>
			<Link href='/'>
				<a>Retornar para home</a>
			</Link>
      <ul>
         {faq.map(({answer, question}) => (
   <article>
    <li key={question}>{question}</li>
   <p key={question + 1}>{answer}</p>
</article>
    )) }
      </ul>
		</div>
	);
};


export default FaqPage;
