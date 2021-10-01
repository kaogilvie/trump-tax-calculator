function showTaxes(){
  var message = document.getElementById("taxes");
  var taxes = message.value;
  var income = document.getElementById("income").value;
  var tax_result = '';
  if (taxes > 750){
    var amount = taxes/750;
    amount = amount.toFixed(1);
    tax_result = `You pay <strong><span class="timesamt">${amount}</span></strong> times more in taxes than President Donald J. Trump.`;
    billionaire.innerHTML = "Why are you paying more taxes than a self-described billionaire? We can't afford four more years of a Cheater-in-Chief.";
  } else {
    tax_result = 'You paid less in taxes than Donald Trump. Are you a "billionaire" too?';
    billionaire.innerHTML = "We can't afford four more years of a Cheater-in-Chief.";
  }
  var income_result = (taxes / income) * 100;
  income_result = income_result.toFixed(1);
  taxes_message.innerHTML= tax_result;
  var income_string = `You spent <strong><span class="percentamt">${income_result}%</span></strong> of your annual income on taxes.<br />Donald Trump spent 0.00092% of his income on taxes.*</p>`;
  income_message.innerHTML = income_string;
  donate.innerHTML = "<a href=\"https://secure.actblue.com/donate/trump-tax-calculator\" class=\"button btnsmall\">Donate to elect Joe Biden</a>";
    donate2.innerHTML = "<a href=\"https://secure.dscc.org/page/contribute?source=trump-tax-calculator\" class=\"button btnsmall\">Donate to flip the Senate</a>";
  play_again.innerHTML = "<a href='http://www.trumptaxcalculator.com/'>Play again.</a>";
  nytimes.innerHTML = "\“Donald J. Trump paid $750 in federal income taxes the year he won the presidency. In his first year in the White House, he paid another $750…. His potential taxable income in 2016 and 2017 included $24.8 million in profits from sources related to his celebrity status and $56.4 million for the loans he did not repay.\” -<a href=\"https://www.nytimes.com/interactive/2020/09/27/us/donald-trump-taxes.html\">The New York Times</a>";
  var title = document.getElementById("site-title");
  tax_form.style.display = "none";
  var footer = document.getElementsByTagName("footer");
  footer.style.display = "block";
};
