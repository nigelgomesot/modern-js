document.getElementById('loan-form').addEventListener('submit', e => {
  document.getElementById('loading').style.display = 'block';
  document.getElementById('results').style.display = 'none';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

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
    document.getElementById('results').style.display = 'block';
  } else {
    console.error('Please check you numbers');
    showError('Please check you numbers');
  }

  document.getElementById('loading').style.display = 'none';

  e.preventDefault();
}

function showError(errorMsg) {
  document.getElementById('results').style.display = 'none';

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
