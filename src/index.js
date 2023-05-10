import './style.css';
import header from './modules/header';
import homePage from './modules/home';
import menuPage from './modules/menu';
import contactPage from './modules/contact';

const content = document.querySelector('.content');

function tabContent() {
  const div = document.createElement('div');
  div.className = 'tab-content'
  return div
}

function addTabListeners() {
  const homeBtn = document.querySelector('.Home');
  const menuBtn = document.querySelector('.Menu');
  const contactBtn = document.querySelector('.Contact');

  homeBtn.addEventListener('click', () => homePage());
  menuBtn.addEventListener('click', () => menuPage());
  contactBtn.addEventListener('click', () => contactPage());
}

content.classList.add('background-div')

content.appendChild(header());
content.appendChild(tabContent());
homePage();

addTabListeners();

