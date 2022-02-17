// Create Header Elements
let divHeader = document.createElement("div");
let logo = document.createElement("div");
let h2logo = document.createElement("h2");
let navBar = document.createElement("ul");
let navElement1 = document.createElement("li");
let navElement2 = document.createElement("li");
let navElement3 = document.createElement("li");
let navElement4 = document.createElement("li");

// Create Text Elements
let logoH2Text = document.createTextNode("Elzero");
let navTextElement1 = document.createTextNode("Home");
let navTextElement2 = document.createTextNode("About");
let navTextElement3 = document.createTextNode("Services");
let navTextElement4 = document.createTextNode("Contact");

// Append Text To Elements
h2logo.appendChild(logoH2Text);
navElement1.appendChild(navTextElement1);
navElement2.appendChild(navTextElement2);
navElement3.appendChild(navTextElement3);
navElement4.appendChild(navTextElement4);

// Append li Elements to ul Element

navBar.appendChild(navElement1);
navBar.appendChild(navElement2);
navBar.appendChild(navElement3);
navBar.appendChild(navElement4);

// apppend H2 to Logo Div
logo.appendChild(h2logo);

// append Elements To  Header Div Element logo -> navBar
divHeader.appendChild(logo);
divHeader.appendChild(navBar);

// add Classes To Elements

divHeader.className = "Header";
logo.className = "logo";
navBar.className = "nav-bar";


// append Div Header To Body 

document.body.appendChild(divHeader);

// CSS elements

divHeader.style.cssText = "display: flex; justify-content: space-between; align-items: center";

navBar.style.cssText = "display: flex;  align-items: center; list-style: none;";

navElement1.style.cssText = "padding: 0 10px; color: gray;";
navElement2.style.cssText = "padding: 0 10px; color: gray;";
navElement3.style.cssText = "padding: 0 10px; color: gray;";
navElement4.style.cssText = "padding: 0 10px; color: gray;";

logo.style.cssText = "padding-top: 0; margin-bottom: 30px; color:#2eb085;";

// body elemnts
let container = document.createElement("div");
let productDiv = "";
let productTitle = "";
let productDescription = "";
let productTitleText = "";
let productDescriptionText = "";
for (let i=1 ; i<=15 ; i++) {
    productDiv = document.createElement("div");
    productTitle = document.createElement("h3");
    productDescription = document.createElement("p");
    productTitleText = document.createTextNode(`${i}`);
    productDescriptionText = document.createTextNode("Product");
    productTitle.appendChild(productTitleText);
    productDescription.appendChild(productDescriptionText);
    productDiv.appendChild(productTitle);
    productDiv.appendChild(productDescription);
    container.appendChild(productDiv);
    productDiv.style.cssText = "background-color: white; text-align: center; border: 1px solid #e7e7e7;";
    productTitle.style.cssText = "font-size: 30px;";
    productDescription.style.cssText = "color: gray; font-weight: bold;"
    

    
}
// append container to body 
document.body.appendChild(container);

// CSS Elements 
container.style.cssText = "background-color: #e7e7e7;  display: grid;grid-template-columns: repeat(auto-fill, minmax(400px,1fr) );gap: 40px; padding: 20px;";



// Footer 
let FooterElement = document.createElement("div");
let h2Footer = document.createElement("h2");
// Footer Text
let FooterText = document.createTextNode("CopyRight 2021");
// append text to h2 footer
h2Footer.appendChild(FooterText);
// append h2 to footer
FooterElement.appendChild(h2Footer);
// append footer to body
document.body.appendChild(FooterElement);

// Css Elemnts 

FooterElement.style.cssText = "background-color: #2eb085; padding: 5px; text-align: center;";
h2Footer.style.cssText = "font-size: 20px; color: white";





















