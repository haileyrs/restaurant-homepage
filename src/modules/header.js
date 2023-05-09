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
      text.className = t;
      tab.appendChild(text)

      
      tabGrid.appendChild(tab)
    }

    div.appendChild(tabGrid)
  }


  return div
}

export default header;