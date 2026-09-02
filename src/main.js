import './styles/global.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Header, iniciarMenuMobile } from './componentes/Header.js'

import { Hero } from './sections/Hero.js'
import { Problemas } from './sections/Problemas.js'
import { Soluciones } from './sections/Soluciones.js'
import { PorqueBiofoam } from './sections/PorqueBiofoam.js'
import { Sectores } from './sections/Sectores.js'
import { Experiencia } from './sections/Experiencia.js'
import { Presencia, iniciarContadoresPresencia } from './sections/Presencia.js'
import { Recursos } from './sections/Recursos.js'
import { Contacto } from './sections/Contacto.js'

import { Footer } from './componentes/Footer.js'


document.querySelector('#app').innerHTML = `

    ${Header()}

    ${Hero()}

    ${Problemas()}

    ${Soluciones()}

    ${PorqueBiofoam()}

    ${Sectores()}

    ${Experiencia()}

    ${Presencia()}

    ${Recursos()}

    ${Contacto()}

    ${Footer()}

`


/* ================================= */
/* INICIAR MENÚ HAMBURGUESA */
/* ================================= */

iniciarMenuMobile()


/* ================================= */
/* INICIAR CONTADORES */
/* ================================= */

iniciarContadoresPresencia()


/* ================================= */
/* HEADER AL HACER SCROLL */
/* ================================= */

window.addEventListener('scroll', () => {

    const header = document.getElementById('header')

    if(!header) return

    if(window.scrollY > 80){

        header.classList.add('scrolled')

    }else{

        header.classList.remove('scrolled')

    }

})