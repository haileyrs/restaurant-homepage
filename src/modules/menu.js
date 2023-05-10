import Coffee from './data/coffee.csv'
import Food from './data/food.csv'

function menuItems(item) {
  const div = document.createElement('div');
  div.className = 'menu-item'
  const name = document.createElement('h5');
  name.textContent = item[0]
  const price = document.createElement('h5');
  price.textContent = item[1]
  const desc = document.createElement('p');
  desc.textContent = item[2];
  div.appendChild(name);
  div.appendChild(price)
  div.appendChild(desc)
  return div
}

function menuPage() {
  const homeBtn = document.querySelector('.Home');
  const menuBtn = document.querySelector('.Menu');
  const contactBtn = document.querySelector('.Contact');
  homeBtn.classList.remove('active');
  menuBtn.classList.add('active');
  contactBtn.classList.remove('active');

  const tabDisplay = document.querySelector('.tab-content');
  tabDisplay.innerHTML = '';

  const menuPage = document.createElement('div');
  menuPage.className = 'menu-page';

  const headline = document.createElement('h2');
  headline.textContent = 'Menu'
  menuPage.appendChild(headline)

  const menuBox = document.createElement('div');
  menuBox.className = 'menu-box';

  const coffeeTitleDiv = document.createElement('div');
  const coffeeTitle = document.createElement('h3');
  coffeeTitle.textContent = 'COFFEE';
  coffeeTitleDiv.appendChild(coffeeTitle);

  menuBox.appendChild(coffeeTitle);

  for (let i = 1; i < Coffee.length; i++) {
    console.log(Coffee.length)
    menuBox.appendChild(menuItems(Coffee[i]))
  }

  const foodTitleDiv = document.createElement('div');
  const foodTitle = document.createElement('h3');
  foodTitle.textContent = 'FOOD';
  foodTitleDiv.appendChild(foodTitle);

  menuBox.appendChild(foodTitleDiv);

  for (let i = 1; i < Food.length; i++) {
    menuBox.appendChild(menuItems(Food[i]))
  }

  menuPage.appendChild(menuBox)
  tabDisplay.appendChild(menuPage);
}

export default menuPage;