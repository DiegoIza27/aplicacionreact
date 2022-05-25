import  React  from  'react';
// renderizar en el html 
import  ReactDom from 'react-dom';    
import CounterApp from './CounterApp';
import './index.css'
const divRoot= document.querySelector('#app')
// ReactDom.render(<PrimeraApp saludo='Hola mundo' /> ,divRoot);
ReactDom.render(<CounterApp value={10}/>,divRoot)