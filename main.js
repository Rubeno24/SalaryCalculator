document.getElementById("resultLabel").addEventListener("input", function () {
  getHourlyWage();
});

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
  var annualIncome = hourlyWageValue * weeks_in_Year_Value * weeklyHours;
  annualIncome = annualIncome.toFixed(2);

  var formattedIncome = parseFloat(annualIncome).toLocaleString();

  var resultLabel = document.getElementById("resultLabel");
  resultLabel.textContent = "Annual Pay: $" + formattedIncome;

  // You can use the hourlyWageValue variable in your JavaScript logic
}
