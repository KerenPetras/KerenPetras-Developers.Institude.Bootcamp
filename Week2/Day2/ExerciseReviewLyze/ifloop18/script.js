const ageQuestion = prompt(`How old are you?`);

if (ageQuestion < 18) {
  alert(`Sorry, you are too young to drive this car. Powering off`);
} else if (ageQuestion == 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (ageQuestion > 18) {
  alert("Powering On. Enjoy the ride!");
}