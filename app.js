//we need this input...why? to know what we're changing teh text TO (which is whatever the user types)
const inputName = document.getElementById("input-name")
const inputPronoun = document.getElementById("input-prounoun")

//we call getElementById with an ID from our html. This grabs the dom element so we can play with it. 
//we need this span...why? because we need to change its text. 
const displayName = document.getElementById("sig")
const displayPronoun = document.getElementById("pronoun")
//we need the button...why?
//to tell the code WHEN to run (on click)
const changeButton = document.getElementById("change-button")
let count = 0;
const displayCount = document.getElementById("display-count")

const salmonButton = document.getElementById("salmon");
const greenButton = document.getElementById("lightgreen");
const yellowButton = document.getElementById("yellow");
const nameTag = document.getElementById("name-tag-color");

const turnSalmon = "salmon";
const turnGreen = "lightseagreen";
const turnYellow = "goldenrod";

//add a click listener to the button. 
changeButton.addEventListener("click", () => {
    //this runs on click
    //"gozinta - operation backwards. whatever is at the end goes into beginning."
    displayName.textContent = inputName.value;
    displayPronoun.textContent = inputPronoun.value;
    inputName.value = "";
    inputPronoun.value = "";
    count++;
    displayCount.innerHTML = count;
    //does it matter if it is textContent or innerHtml
    console.log(count);
});

inputPronoun.addEventListener('keyup', function(event) {
	var key = event.key || event.keyCode;
	if (key === 'Enter' || key === 13) {
	  event.preventDefault
	  changeButton.click();  // document.getElementById('name-change-button').click();
	}
  });

salmonButton.addEventListener("click", () => {
    nameTag.style.backgroundColor = turnSalmon
});

greenButton.addEventListener("click", () => {
    nameTag.style.backgroundColor = turnGreen;
});

yellowButton.addEventListener("click", () => {
    nameTag.style.backgroundColor = turnYellow;
});

//i want to change the font through a dropdown menu 

const changeFontStyle = (font) => {
  nameTag.style.fontFamily = font.value
}