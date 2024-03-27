const epicMix = [
  "Time to Pretend",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "I Put a Spell on You",
  "Call Me",
  "Paper Planes",
  "Jolene",
  "You Don't Own Me",
  "Fast Car",
  "Run the World (Girls)",
  "Superstition"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

//create an event listener that hides the "show-me" button and shows the unordered list (.mix)

button.addEventListener("click", function() {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix); //call the mixInfo function and pass it the epicMmix array
});

// set the innertext of the total variable to display the number of songs using the length property
total.innerText = `${epicMix.length} greats songs!`;

//Create a function
const mixInfo = function(mix) {
  mix.forEach(function(song, index) {
    let listItem = document.createElement("li");//create list item
    listItem.classList.add("song"); //add class called song to list item
    listItem.innerHTML = `<span class="song-number">#${index +1}</span> ${song}`;
    mixList.append(listItem); //append the list item to mixList
  });
};