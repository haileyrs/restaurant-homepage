function menuPage() {
  const tabDisplay = document.querySelector('.tab-content');
  tabDisplay.innerHTML = '';

  const menuPage = document.createElement('div');
  menuPage.className = 'menu-page';

  const headline = document.createElement('h3');
  headline.textContent = 'Menu'
  menuPage.appendChild(headline)
  
  tabDisplay.appendChild(menuPage);
}

export default menuPage;