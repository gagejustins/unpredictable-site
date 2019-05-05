var colors = ["red", "white", "#B8B8B8", "#ff9999"]
var currentColor = 0
const texts = document.querySelectorAll(".logo-text")
const hearts = document.querySelectorAll(".heart")

function changeColor(colors_array) {
  const currColor = texts[0].style.color;
  // Filter current color out of colors array 
  const new_colors = colors.filter(color => color !== currColor);
  // Select random element from new colors array
  const new_color = new_colors[Math.floor(Math.random()*new_colors.length)];
  // Set logo text to new color
  for (var i = 0; i < texts.length; i++) {
    texts[i].style.color = new_color;
  }
  // Set the logo to new color
  for (var i = 0; i < hearts.length; i++) {
      hearts[i].style.stroke = new_color;
      hearts[i].style.fill = new_color;
    }
}

setInterval(changeColor, 900)