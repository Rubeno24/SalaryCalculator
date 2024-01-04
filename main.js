var annualIncome = 0;
var weeks_in_Year_Value = 0;

document.getElementById("resultLabel").addEventListener("input", function () {
  getAnnualPay();
  getNetAnnualPay();
});

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
