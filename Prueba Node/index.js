import { routes } from './src/router/Routes.js';

const app = document.getElementById('sudoku-container');
app.innerHTML = '';
app.appendChild(routes);