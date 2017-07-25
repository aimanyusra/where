// get a random integer (this is used to return a random element from an array)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addShops() {
	var shopsArray = ["Ho Li Chow", "Fish Head Noodles", "Pedas Pedas", "Nasi Kukus", "Lat Tali Lat", "Village Park", "Cup Noodles", "Chap Fan"]

	arrayLength = shopsArray.length;
	rand = getRandomInt(0, arrayLength);
	console.log(rand);

	// get the p tag with id 'emotion' and use innerHTML to change the value inside the p tag
	shops = document.getElementById('restaurant');
	shops.innerHTML = shopsArray[rand];
	

}

function getShop() {
	shops = document.getElementById('restaurant');
	clearInterval(disp)
	choice = document.getElementById('choice')

	choice.textContent = "Let's go eat " + shops.innerHTML + "!"
}



function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');

    
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", function() {
  	disp = setInterval(addShops, 25)
  })

  getBtn = document.getElementById('get-restaurant-button');
  
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", getShop)
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);