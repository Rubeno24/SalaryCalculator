var annualIncome = 0; // Variable to store the annual income, initialized to 0
var weeks_in_Year_Value = 0; // Variable to store the number of weeks in a year, initialized to 0

// Event listener for input changes on certain elements to trigger calculations
document.getElementById("resultLabel").addEventListener("input", function () {
  getAnnualPay();
  getNetAnnualPay();
});

// Event listeners for input changes on various elements to trigger calculations
document.getElementById("hourlyWage").addEventListener("input", function () {
  getAnnualPay();
  getNetAnnualPay();
});

document.getElementById("weeks_in_Year").addEventListener("input", function () {
  getAnnualPay();
  getNetAnnualPay();
});

document.getElementById("weeklyHours").addEventListener("input", function () {
  getAnnualPay();
  getNetAnnualPay();
});

document.getElementById("taxPercentage").addEventListener("input", function () {
  getNetAnnualPay();
});

// Function to calculate annual pay based on input values
function getAnnualPay() {
  var hourlyWageValue = document.getElementById("hourlyWage").value;
  weeks_in_Year_Value = document.getElementById("weeks_in_Year").value;
  var weeklyHours = document.getElementById("weeklyHours").value;
  annualIncome = hourlyWageValue * weeks_in_Year_Value * weeklyHours;
  annualIncome = annualIncome.toFixed(2);

  var formattedIncome = parseFloat(annualIncome).toLocaleString();

  var resultLabel = document.getElementById("resultLabel");
  resultLabel.textContent = "Annual Pay: $" + formattedIncome;
}

// Function to calculate net annual pay based on input values
function getNetAnnualPay() {
  var taxPercentage = document.getElementById("taxPercentage").value;
  var net_Yearly_Income_Label = document.getElementById("net_Yearly_Income");
  var net_Hourly_Income_Label = document.getElementById("net_Hourly_Income");

  var net_Yearly_Income = annualIncome * (1 - taxPercentage / 100);
  net_Yearly_Income = net_Yearly_Income.toFixed(2);

  var formatted_Net_Yearly_Income =
    parseFloat(net_Yearly_Income).toLocaleString();
  net_Yearly_Income_Label.textContent =
    "Net Annual Pay: $" + formatted_Net_Yearly_Income;

  var net_Hourly_Pay = net_Yearly_Income / (weeks_in_Year_Value * 40);
  net_Hourly_Pay = net_Hourly_Pay.toFixed(2);

  var formatted_Net_Hourly_Income = parseFloat(net_Hourly_Pay).toLocaleString();

  net_Hourly_Income_Label.textContent =
    "Net Hourly Pay: $" + formatted_Net_Hourly_Income;
}

// Event listener for input changes on the yearlyWage element to trigger hourly pay calculation
document.getElementById("yearlyWage").addEventListener("input", function () {
  getHourlyPay();
});

// Event listeners for input changes on certain elements to trigger hourly pay calculation
document
  .getElementById("weeks_in_Year_HPC")
  .addEventListener("input", function () {
    getHourlyPay();
  });

document
  .getElementById("weeklyHours_HPC")
  .addEventListener("input", function () {
    getHourlyPay();
  });

// Function to calculate hourly pay based on input values
function getHourlyPay() {
  var yearlyWage = document.getElementById("yearlyWage").value;
  var numberStripped = yearlyWage.replace(/,/g, "");
  yearlyWage = numberStripped;

  var weeks_in_Year_HPC = document.getElementById("weeks_in_Year_HPC").value;
  var weeklyHours_HPC = document.getElementById("weeklyHours_HPC").value;

  var hourlyWageHPC = numberStripped / weeks_in_Year_HPC / weeklyHours_HPC;
  hourlyWageHPC = hourlyWageHPC.toFixed(2);

  var resultLabel_HPC = document.getElementById("resultLabel_HPC");

  var formatted_hourlyWageHPC = parseFloat(hourlyWageHPC).toLocaleString();

  resultLabel_HPC.textContent = "Hourly Wage: $" + formatted_hourlyWageHPC;
}

// Function to append a value to a custom input element (not found in provided HTML)
function appendToInput(value) {
  document.getElementById("customInput").value += value;
}
