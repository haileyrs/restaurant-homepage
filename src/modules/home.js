function homePage() {
  const homeBtn = document.querySelector('.Home');
  const menuBtn = document.querySelector('.Menu');
  const contactBtn = document.querySelector('.Contact');
  homeBtn.classList.add('active');
  menuBtn.classList.remove('active');
  contactBtn.classList.remove('active');

  const tabDisplay = document.querySelector(".tab-content");
  tabDisplay.innerHTML = "";

  const mainContent = document.createElement("div");
  mainContent.className = "main";
  mainContent.style.height = '100vh'

  const headline = document.createElement("h2");
  headline.textContent =
    "Nothing beats watching the sunrise and sipping on your favorite coffee.";

  const followLine = document.createElement("h3");
  followLine.textContent = "We've got the coffee part covered!";

  const description = document.createElement("p");
  description.textContent =
    "Come in for a fresh cup or a signature espresso drink, and enjoy the beautiful views.";
  const moreDesc = document.createElement("p");
  moreDesc.textContent =
    "Hungry? We've got you covered with breakfast staples and bakery favorites, there's something for everyone.";
  mainContent.appendChild(headline);
  mainContent.appendChild(followLine);
  mainContent.appendChild(description);
  mainContent.appendChild(moreDesc);

  const perksDiv = document.createElement('div');
  perksDiv.className = 'perks-div';
  perksDiv.innerHTML = `
  <div>
    <h2>Earn Points on Your Next Purchase</h2>
    <h5>Ask your barista how you could get free coffee and snacks by joining our rewards program!</h5>
  </div>
  <button>Sign Up Now</button>
  `

  mainContent.appendChild(perksDiv);

  const coffeeImage = document.createElement('div');
  coffeeImage.className = 'coffee-div'

  mainContent.appendChild(coffeeImage);

  tabDisplay.appendChild(mainContent);
}

export default homePage;



  
