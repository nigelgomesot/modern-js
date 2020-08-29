
let str,
    re;

// Literals
re = /hello/;
re = /hello/i;

// Metacharacters
re = /^h/i;
re = /ld$/i;
re = /^hello$/i;
re = /ld$/i;
re = /h.llo/i;
re = /h*e/i;
str = 'Hello World';

re = /gre?a?y/;
str = 'gray';

re = /gre?a?y\?/;
str = 'gray?';

// Character sets
re = /gr[ae]y/;
str = 'grey';

re = /[GX]re?a?y/;
str = 'Gray';

re = /[^GX]re?a?y/;
str = 'Fray';

re = /[A-Z]re?a?y/;
str = 'Xray';

re = /[a-z]re?a?y/;
str = 'gray';

re = /[A-Za-z]re?a?y/;
str = 'gray';

re = /number[0-9]/;
str = 'number5';

// Quantifiers
re = /Hel{2}o/i;
str = 'Hello World';

re = /Hel{2,4}o/i;
str = 'Helllo World';

re = /Hel{2,}o/i;
str = 'Hellllllo World';

// Grouping
re = /([0-9]x){3}/i;
str = '3x3x3x';

// Shorthand
re = /\w/;
re = /\w+/;
str = '3x3x3x';

re = /\W/;
str = '(3x3x3x';

re = /\d/;
re = /\d+/;
str = '33333x';

re = /\D/;
str = '33333x';

re = /\s/;
re = /\s+/;
str = '33  333x';

re = /\S/;
str = '  333x';

// Word Boundary
re = /abc\b/;
str = 'abcd abc';

// Assertions
re=/x(?=y)/;
str = 'abcxyz';

re=/x(?!y)/;
str = 'abcxz';

const result = re.exec(str)
console.log(result);


const reTest = (re, str) => {
  if (re.test(str))
    console.log(`'${str}' matches '${re.source}'`)
  else
    console.warn(`'${str}' does not match '${re.source}'`)
}
reTest(re,str);

