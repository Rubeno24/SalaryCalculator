document.getElementById("hourlyWage").addEventListener("input", function () {
  getHourlyWage();
});

document.getElementById("weeks_in_Year").addEventListener("input", function () {
  getHourlyWage();
});

document.getElementById("weeklyHours").addEventListener("input", function () {
  getHourlyWage();
});

function getHourlyWage() {
  var hourlyWageValue = document.getElementById("hourlyWage").value;
  var weeks_in_Year_Value = document.getElementById("weeks_in_Year").value;
  var weeklyHours = document.getElementById("weeklyHours").value;
  var anualIncome = hourlyWageValue * weeks_in_Year_Value * weeklyHours;

  var resultLabel = document.getElementById("resultLabel");
  resultLabel.textContent = "Result: " + anualIncome;

  // You can use the hourlyWageValue variable in your JavaScript logic
}
