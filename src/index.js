import $ from 'jquery';
import { greet } from './messages';
import './styles/main.scss';

$('#btnSaludar').on('click', () => alert(greet('Hello')));

console.log(greet('Hello'));