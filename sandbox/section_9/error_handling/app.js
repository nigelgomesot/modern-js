
try {
  myFunction1();
} catch (e) {
  console.warn(e);
}

const user = {email: 'test@test.com'}
try {
  // myFunction2(); // ReferenceError
  // null.myFunction2(); // TypeError
  // eval('Hello World'); // SyntaxError
  // decodeURIComponent('%'); // URIError
  if (!(user.name)) {
    // throw 'name missing';
    // throw new Error('name missing');
    throw new ReferenceError('name is missing')
  }

} catch (e) {
  console.warn(e);
  console.warn(e.message);
  console.warn(e.name);
  console.warn(e instanceof ReferenceError);
  console.warn(e instanceof TypeError);
} finally {
  console.log('finally executed.');
}



console.log('completed');

