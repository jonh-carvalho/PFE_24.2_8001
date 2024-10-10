import React from 'https://unpkg.com/react@18/umd/react.development.js';
import ReactDOM from 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';

const myHeading = <h1>Olá, mundo! Este é meu primeiro componente React.</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myHeading);