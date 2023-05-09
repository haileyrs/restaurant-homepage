function contactPage() {
  const tabDisplay = document.querySelector('.tab-content');
  tabDisplay.innerHTML = '';

  const contactPage = document.createElement('div');
  contactPage.className = 'contact-page';
  
  const headline = document.createElement('h3');
  headline.textContent = 'Contact'
  contactPage.appendChild(headline)
  
  tabDisplay.appendChild(contactPage)
}

export default contactPage;