function contactPage() {
  const tabDisplay = document.querySelector('.tab-content');
  tabDisplay.innerHTML = '';

  const contactPage = document.createElement('div');
  contactPage.className = 'contact-page';
  
  const headline = document.createElement('h2');
  headline.textContent = 'Contact'
  contactPage.appendChild(headline)

  const contactContent = document.createElement('div');
  contactContent.className = 'contact-content'

  contactContent.innerHTML = `
  <div class="location">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path fill="#BE6DB7" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
    <h5>11378 Ocean Hwy, Pawley's Island, SC 29585</h5>
  </div>
  <div class="hours">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clock-time-eight</title><path fill="#BE6DB7" d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M7.7 15.5L7 14.2L11 11.9V7H12.5V12.8L7.7 15.5Z" /></svg>
    <h5>Monday-Thursday: 5:30am to 4pm, Friday-Sunday: 6:30am to 4pm</h5>
  </div>
  <div class="message">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-arrow-left</title><path fill="#BE6DB7" d="M13 19C13 15.69 15.69 13 19 13C20.1 13 21.12 13.3 22 13.81V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19M4 8V6L12 11L20 6V8L12 13L4 8M18 16V18H22V20H18V22L15 19L18 16Z" /></svg>
    <h5>Contact Us</h5>
  </div>
  <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.009251457437!2d-79.1191799!3d33.44906549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8900312846c314a1%3A0x9d2cad3c161562a1!2s11378%20Ocean%20Hwy%2C%20Pawleys%20Island%2C%20SC%2029585!5e0!3m2!1sen!2sus!4v1683663054239!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  `
  
  contactPage.appendChild(contactContent)
  tabDisplay.appendChild(contactPage)
}

export default contactPage;