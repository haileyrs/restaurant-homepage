function homePage() {
  const tabDisplay = document.querySelector('.tab-content');
  tabDisplay.innerHTML = ''

  const mainContent = document.createElement('div');
  mainContent.className = 'main';
  
  const headline = document.createElement('h2');
  headline.textContent = 'Nothing beats watching the sunrise and sipping on your favorite coffee.'

  const followLine = document.createElement('h3');
  followLine.textContent = "We've got the coffee part covered!"
  mainContent.appendChild(headline)
  mainContent.appendChild(followLine)

  tabDisplay.appendChild(mainContent)
}

export default homePage;