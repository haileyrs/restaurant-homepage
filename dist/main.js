(()=>{var e={426:(e,n,t)=>{"use strict";t.d(n,{Z:()=>h});var o=t(81),r=t.n(o),a=t(645),c=t.n(a),i=t(667),s=t.n(i),d=new URL(t(496),t.b),l=new URL(t(868),t.b),u=c()(r());u.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Alice&Montserrat:wght@200;400;700&display=swap);"]);var p=s()(d),m=s()(l);u.push([e.id,"* {\n  font-family: 'Montserrat', sans-serif;\n}\n\nbody, #content {\n  margin: 0;\n}\n\nsvg {\n  height: 20px;\n  margin: 8px;\n}\n\np {\n  color: #3b2239;\n}\n\n.header {\n  background-color: #C04A82;\n  height: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 36px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n\n.header h1, .header h3 {\n  color: #FDD36A;\n  font-family: 'Alice', serif;\n}\n\n.tab-grid {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 300px;\n}\n\n.background-div {\n  /* Photo by Ivana Cajina on Unsplash */\n  background: url("+p+") no-repeat center center fixed;\n  background-size: cover;\n  padding-bottom: 32px;\n}\n\n.main, .menu-page, .contact-page {\n  background-color: #dc84497a;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: fit-content;\n  margin: 32px 32px 16px 32px;\n  padding: 32px 32px 16px 32px;\n  text-align: center;\n}\n\n.main h2, .menu-page h2, .contact-page h2, h3 {\n  color: #BE6DB7;\n  font-family: 'Alice', serif;\n  border-bottom: 2px solid transparent;\n  transition: transform 0.3s;\n}\n\n.Menu:hover, .Contact:hover, .Home:hover, .active {\n  cursor:pointer;\n  outline-width: 6px;\n  border-bottom: 2px solid #BE6DB7;\n}\n\n.perks-div {\n  margin: 64px 16px;\n  padding: 16px;\n  border-radius: 15px;\n  background-color: #C04A82;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  align-items: center;\n  justify-items: center;\n}\n\nbutton {\n  width: fit-content;\n  height: fit-content;\n  padding: 16px 32px;\n  border-radius: 50px;\n  border: none;\n  font-size: medium;\n  background-color: #FDD36A;\n  color: #BE6DB7;\n  font-family: 'Alice', serif;\n  font-weight: 600;\n  transition-duration: 0.3s;\n  transition-property: background-color;\n}\n\nbutton:hover {\n  background-color: #dfba5e;\n}\n\n.coffee-div {\n  /* Photo by Fahmi Fakhrudin on Unsplash */\n  background: url("+m+") no-repeat;\n  background-size: cover;\n  margin-bottom: 32px;\n  height: 30vh;\n  width: 60vw;\n  border-radius: 15px;\n  display: flex;\n}\n\n.menu-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 16px;\n  gap: 8px;\n  text-align: center;\n}\n\n.menu-item p, .menu-item h5 {\n  margin: 0;\n  color: #3b2239;\n}\n\nh5 {\n  color: #3b2239;\n}\n\n.message, .location, .hours {\n  display: flex;\n  align-items: center;\n}\n\n.message h5:hover, .message svg:hover {\n  cursor: pointer;\n}\n\n",""]);const h=u},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{"use strict";e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},4:e=>{e.exports=[["item","price","description"],["Brewed Coffee","2.5","Roasted daily and brewed hourly for the freshest cup of coffee possible."],["Latte","4.5","Espresso with your choice of milk."],["Mocha","5","Espresso with choice of milk and dark chocolate."],["Americano","3","Espresso and hot water."],["Cold Brew","4","Slow brewed specialty roast with a smooth finish."],["Caramel Cold Brew","4.5","Signature cold brew with our rich caramel sauce."]]},718:e=>{e.exports=[["item","price","description"],["Sausage Biscuit","5","Savory sausage and a fried egg topped with cheddar cheese on a buttermilk biscuit."],["Bacon Egg & Cheese Bagel","5.5","Applewood smoked bacon and a fried egg topped with cheddar cheese on our signature toasted plain bagel."],["Maple Waffle Sandwich","5.5","Chicken sausage and a fried egg topped with gouda cheese on two maple waffles."],["Ham & Swiss Bagel","5.5","Cherrywood smoked ham and a fried egg topped with swiss cheese on a toasted asiago bagel."],["Blueberry Muffin","3","A large muffin loaded with blueberries and topped with streusal."],["Lemon PoppySeed Muffin","3","A large muffin full of crunchy poppyseeds and topped with lemon drizzle."],["House-Made Cake Donut","2.5","A super fresh cake donut with varying flavors day to day."]]},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},868:(e,n,t)=>{"use strict";e.exports=t.p+"3ee46139c9d5b9ac44d8.jpg"},496:(e,n,t)=>{"use strict";e.exports=t.p+"e09e8eca60dbe8820750.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=function(){const e=document.querySelector(".Home"),n=document.querySelector(".Menu"),t=document.querySelector(".Contact");e.classList.add("active"),n.classList.remove("active"),t.classList.remove("active");const o=document.querySelector(".tab-content");o.innerHTML="";const r=document.createElement("div");r.className="main",r.style.height="100vh";const a=document.createElement("h2");a.textContent="Nothing beats watching the sunrise and sipping on your favorite coffee.";const c=document.createElement("h3");c.textContent="We've got the coffee part covered!";const i=document.createElement("p");i.textContent="Come in for a fresh cup or a signature espresso drink, and enjoy the beautiful views.";const s=document.createElement("p");s.textContent="Hungry? We've got you covered with breakfast staples and bakery favorites, there's something for everyone.",r.appendChild(a),r.appendChild(c),r.appendChild(i),r.appendChild(s);const d=document.createElement("div");d.className="perks-div",d.innerHTML="\n  <div>\n    <h2>Earn Points on Your Next Purchase</h2>\n    <h5>Ask your barista how you could get free coffee and snacks by joining our rewards program!</h5>\n  </div>\n  <button>Sign Up Now</button>\n  ",r.appendChild(d);const l=document.createElement("div");l.className="coffee-div",r.appendChild(l),o.appendChild(r)};var g=t(4),v=t.n(g),y=t(718),b=t.n(y);function x(e){const n=document.createElement("div");n.className="menu-item";const t=document.createElement("h5");t.textContent=e[0];const o=document.createElement("h5");o.textContent=e[1];const r=document.createElement("p");return r.textContent=e[2],n.appendChild(t),n.appendChild(o),n.appendChild(r),n}const w=document.querySelector(".content");w.classList.add("background-div"),w.appendChild(function(){const e=document.createElement("div");e.className="header";const n=document.createElement("h1");return n.textContent="Sunrise Cafe",e.appendChild(n),function(n){const t=document.createElement("div");t.className="tab-grid";for(let e of["Home","Menu","Contact"]){let n=document.createElement("div"),o=document.createElement("h3");o.textContent=e,o.className=e,n.appendChild(o),t.appendChild(n)}e.appendChild(t)}(),e}()),w.appendChild(function(){const e=document.createElement("div");return e.className="tab-content",e}()),f(),function(){const e=document.querySelector(".Home"),n=document.querySelector(".Menu"),t=document.querySelector(".Contact");e.addEventListener("click",(()=>f())),n.addEventListener("click",(()=>function(){const e=document.querySelector(".Home"),n=document.querySelector(".Menu"),t=document.querySelector(".Contact");e.classList.remove("active"),n.classList.add("active"),t.classList.remove("active");const o=document.querySelector(".tab-content");o.innerHTML="";const r=document.createElement("div");r.className="menu-page";const a=document.createElement("h2");a.textContent="Menu",r.appendChild(a);const c=document.createElement("div");c.className="menu-box";const i=document.createElement("div"),s=document.createElement("h3");s.textContent="COFFEE",i.appendChild(s),c.appendChild(s);for(let e=1;e<v().length;e++)console.log(v().length),c.appendChild(x(v()[e]));const d=document.createElement("div"),l=document.createElement("h3");l.textContent="FOOD",d.appendChild(l),c.appendChild(d);for(let e=1;e<b().length;e++)c.appendChild(x(b()[e]));r.appendChild(c),o.appendChild(r)}())),t.addEventListener("click",(()=>function(){const e=document.querySelector(".Home"),n=document.querySelector(".Menu"),t=document.querySelector(".Contact");e.classList.remove("active"),n.classList.remove("active"),t.classList.add("active");const o=document.querySelector(".tab-content");o.innerHTML="";const r=document.createElement("div");r.className="contact-page";const a=document.createElement("h2");a.textContent="Contact",r.appendChild(a);const c=document.createElement("div");c.className="contact-content",c.innerHTML='\n  <div class="location">\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path fill="#BE6DB7" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>\n    <h5>11378 Ocean Hwy, Pawley\'s Island, SC 29585</h5>\n  </div>\n  <div class="hours">\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clock-time-eight</title><path fill="#BE6DB7" d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M7.7 15.5L7 14.2L11 11.9V7H12.5V12.8L7.7 15.5Z" /></svg>\n    <h5>Monday-Thursday: 5:30am to 4pm, Friday-Sunday: 6:30am to 4pm</h5>\n  </div>\n  <div class="message">\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-arrow-left</title><path fill="#BE6DB7" d="M13 19C13 15.69 15.69 13 19 13C20.1 13 21.12 13.3 22 13.81V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19M4 8V6L12 11L20 6V8L12 13L4 8M18 16V18H22V20H18V22L15 19L18 16Z" /></svg>\n    <h5>Contact Us</h5>\n  </div>\n  <div class="map">\n    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.009251457437!2d-79.1191799!3d33.44906549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8900312846c314a1%3A0x9d2cad3c161562a1!2s11378%20Ocean%20Hwy%2C%20Pawleys%20Island%2C%20SC%2029585!5e0!3m2!1sen!2sus!4v1683663054239!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n  </div>\n  ',r.appendChild(c),o.appendChild(r)}()))}()})()})();