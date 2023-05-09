function homePage() {
  

  const tabDisplay = document.querySelector(".tab-content");
  tabDisplay.innerHTML = "";

  const mainContent = document.createElement("div");
  mainContent.className = "main";

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

  tabDisplay.appendChild(mainContent);
}

export default homePage;



  
