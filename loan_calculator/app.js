document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
  const eleAmount = document.getElementById('amount');
  const eleInterest = document.getElementById('interest');
  const eleYears = document.getElementById('years');
  const eleMonthlyPayment = document.getElementById('monthly-payment');
  const eleTotalPayment = document.getElementById('total-payment');
  const eleTotalInterest = document.getElementById('total-interest');

  const principal = parseFloat(eleAmount.value);
  const calculatedInterest = parseFloat(eleInterest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthlyPayment = (principal * x * calculatedInterest)/(x - 1);

  if (isFinite(monthlyPayment)) {
    eleMonthlyPayment.value = monthlyPayment.toFixed(2);
    eleTotalPayment.value = (monthlyPayment * calculatedPayments).toFixed(2);
    eleTotalInterest.value = ((monthlyPayment * calculatedPayments) - principal).toFixed(2);
  } else {
    console.error('Please check you numbers');

    showError('Please check you numbers');
  }

  e.preventDefault();
}


function showError(errorMsg) {
  const eleErrorDiv = document.createElement('div');
  const eleCard = document.querySelector('.card');
  const eleHeading = document.querySelector('.heading');

  eleErrorDiv.classList = 'alert alert-danger';
  eleErrorDiv.appendChild(document.createTextNode(errorMsg));

  eleCard.insertBefore(eleErrorDiv, eleHeading);

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}
