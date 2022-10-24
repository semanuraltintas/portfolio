const display = document.getElementById("motivation");

const motivation = [
  {
    quote: "Planting popcorn does not produce more popcorn",
    person: "Farmer Ted",
  },
  {
    quote: "White whale, bad whale",
    person: "Confucious (Moby Dick)",
  },
  {
    quote: "Use the strobe function to disorientate your attacker",
    person: "Flashlight",
  },
  {
    quote: "Help me, I'm bleaching",
    person: "The Great Barrier Reef",
  },
];

function motivateMe() {
  const listLength = motivation.length;
  const randVal = motivation[Math.floor(Math.random() * listLength)];
  display.innerHTML = `<blockquote>"${randVal.quote}"</blockquote><cite>${randVal.person}</cite>`;
}

var changeThemeButton = document.querySelector("#change-theme");

changeThemeButton.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-theme");
  console.log(document.body.classList.contains("dark-theme"));
});
