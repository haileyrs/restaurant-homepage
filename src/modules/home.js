function homePage() {
  const tabDisplay = document.querySelector('.tab-content');
  tabDisplay.innerHTML = ''

  const mainContent = document.createElement('div');
  mainContent.className = 'main';
  
  const headline = document.createElement('h3');
  headline.textContent = 'WARNING in webpack performance recommendations: You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application. For more info visit https://webpack.js.org/guides/code-splitting/'
  mainContent.appendChild(headline)

  tabDisplay.appendChild(mainContent)
}

export default homePage;