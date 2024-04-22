// Import the punycode module
const punycode = require('punycode');


// Example Unicode domain name
const unicodeDomain = 'example.com';

// Convert Unicode domain name to Punycode
const punycodeDomain = punycode.toASCII(unicodeDomain);
console.log('Punycode domain:', punycodeDomain);

// Convert Punycode domain name back to Unicode
const unicodeDomainAgain = punycode.toUnicode(punycodeDomain);
console.log('Unicode domain:', unicodeDomainAgain);
