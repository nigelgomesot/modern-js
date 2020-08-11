document.getElementById('button1').addEventListener('click', loadCustomer);
function loadCustomer() {
  const xhr = new XMLHttpRequest;
  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const outputHTML = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = outputHTML;
    }
  }

  xhr.send();
}

document.getElementById('button2').addEventListener('click', loadCustomers);
function loadCustomers() {
  const xhr = new XMLHttpRequest;
  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);

      let outputHTML = '';
      const customers = JSON.parse(this.responseText);

      customers.forEach(function(customer) {
        outputHTML += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

        document.getElementById('customers').innerHTML = outputHTML;
      });
    }
  }

  xhr.send();
}
