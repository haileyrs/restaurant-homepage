import './style.css';
import Sunrise from './sunrise.jpg';
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

function image() {

  // Photo by <a href="https://unsplash.com/@von_co?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivana Cajina</a> on <a href="https://unsplash.com/photos/dQejX2ucPBs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  const background = document.createElement('div')
  background.className = 'background-div';

  return background

}

function coffeeImage() {
  // Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/images/food/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  const coffeeImage = document.createElement('div')
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
