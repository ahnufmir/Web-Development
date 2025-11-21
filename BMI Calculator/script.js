const form = document.querySelector("form");
const result = document.querySelector("#results");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (
    height === "" ||
    height < 0 ||
    isNaN(height) ||
    weight === "" ||
    weight < 0 ||
    isNaN(weight)
  )
    result.innerHTML = "Please Enter Correct Height or Weight";
  else {
    const bmi = weight / (height * height);
    let catergory = "";
    if (bmi < 18.6) {
      catergory = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      catergory = "Normal Weight";
    } else {
      catergory = "Over Weight";
    }
    result.innerHTML = `<span>${bmi} - ${catergory}</span>`;
  }
});
