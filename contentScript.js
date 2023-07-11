// Change the background color of the body to black
document.body.style.backgroundColor = "black";

// Create a div element for the message
const fakeBodyDiv = document.createElement("div");
fakeBodyDiv.style.width = "100%";
fakeBodyDiv.style.height = "100%";
fakeBodyDiv.style.position = "fixed";
fakeBodyDiv.style.top = "0";
fakeBodyDiv.style.left = "0";
fakeBodyDiv.style.zIndex = "1000";
fakeBodyDiv.style.backgroundColor = "black";
fakeBodyDiv.style.color = "red";
fakeBodyDiv.style.fontSize = "48px";
fakeBodyDiv.style.display = "flex";
fakeBodyDiv.style.justifyContent = "center";
fakeBodyDiv.style.alignItems = "center";
fakeBodyDiv.innerText = "YOU ARE LOVELY";

// Add the div element to the body
document.body.appendChild(fakeBodyDiv);
