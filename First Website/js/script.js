const body = document.body
const lightSwitch = document.getElementById('lights-toggle')
const button = document.getElementById('add');


function imgSlider(imgsrc){
  document.querySelector('.member').src = imgsrc;
}
function changeColor(color){
  const circle = document.querySelector('.circle');
  circle.style.background = color;  
}

if (lightSwitch) {
  window.addEventListener('load', checkLights)
  lightSwitch.addEventListener('change', checkLights)
}


function checkLights () {
  let labelText = lightSwitch.parentNode.querySelector('.label-text')
  if (lightSwitch.checked) {
    body.classList.remove('lights-off')
    if (labelText) {
      labelText.innerHTML = 'dark mode'
    }
  } else {
    body.classList.add('lights-off')
    if (labelText) {
      labelText.innerHTML = 'light mode'
    }
  }
}
function addIceCream () {
  document.getElementById("members").innerHTML+= `<img src="img/avatar4.png" onclick="imgSlider('img/avatar4.png');changeColor('#f4c5b8')">`
}
button.addEventListener("click", addIceCream);
