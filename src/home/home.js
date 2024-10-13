// import '../../src/styles/main.css';
import './styles.css';

// import { navbar } from '../shared/navbar/navbar';
// import { footer } from '../shared/footer/footer';

// document.getElementById('navbar').appendChild(navbar);
// document.getElementById('footer').appendChild(footer);

const body = document.body;
const boton = document.createElement('button');
boton.innerText = 'volver';
boton.className = 'btn btn-primary btn-sm';
body.appendChild(boton);

boton.addEventListener('click', () => {
    console.log('aca el boton');
    window.location = '/';
});
