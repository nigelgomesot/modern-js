
let re;
let str;
let result;

re = /hello/;
console.log(re);
console.log(re.source);

// exec()
re = /hello/;
result = re.exec('test hello world');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test()
re = /hello/i;
result = re.test('test Hello world')
console.log(result);

re = /hello/g;
result = re.test('test hello world hello hello')
console.log(result);

// match()
re = /hello/i;
str =  'hello World';
result = str.match(re);
console.log(result);

// search()
re = /hello/i;
str =  'test Hello World';
result = str.search(re)
console.log(result);

// replace()
re = /hello/i;
str =  'test Hello World';
result = str.replace(re, 'Hi')
console.log(result);
