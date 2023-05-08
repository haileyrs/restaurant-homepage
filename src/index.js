import './style.css';

function header() {
  const div = document.createElement('div');
  div.className = 'header'

  // const icon = document.createElement('i');
  // icon.className = 'fa-solid fa-sun-haze';
  // div.appendChild(icon)
  const title = document.createElement('h1');
  title.textContent = 'Sunrise Cafe'
  div.appendChild(title)

  tabs(['Home', 'Menu', 'Contact'])

  function tabs(options) {
    const tabGrid = document.createElement('div');
    tabGrid.className = 'tab-grid'
    for (let t of options) {
      let tab = document.createElement('div');
      let text = document.createElement('h3');
      text.textContent = t;
      tab.appendChild(text)
      tabGrid.appendChild(tab)
    }

    div.appendChild(tabGrid)
  }


  return div
}

function image() {

  // Photo by <a href="https://unsplash.com/@von_co?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivana Cajina</a> on <a href="https://unsplash.com/photos/dQejX2ucPBs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  const background = document.createElement('div')
  background.className = 'background-div';

  return background

}

function mainContent() {
  const mainContent = document.createElement('div');
  mainContent.className = 'main';

  const headline = document.createElement('h3');
  headline.textContent = 'WARNING in webpack performance recommendations: You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application. For more info visit https://webpack.js.org/guides/code-splitting/'
  mainContent.appendChild(headline)
  return mainContent
}

// const content = document.getElementById('content');

// content.appendChild(header())

document.body.appendChild(header());
document.body.appendChild(mainContent());
// document.body.appendChild(image());