'use strict';

function declareVar() {
  // var declares generally, it does not assert a type
  var myNum = 42;
  console.log(typeof myNum);
  // dynamically typed
  myNum = 'forty-two';
  console.log(typeof myNum);
}

function declareFunctionScoped() {
  // myNum = 42;
  {
    // let scopes the variable as you would expect
    let myNum;
    console.log(typeof myNum);
  }

  // myNum = 'forty-two';
  // console.log(typeof myNum);
}

function primitiveTypes() {
  // Number — equivalent to double in Java
  // there is no int type
  let v = 10.0;
  console.log(v, typeof v);

  // String — no such thing as a char
  v = 'Hello, World';
  console.log(v, typeof v);

  // Boolean
  v = true;
  console.log(v, typeof v);

  //  undefined means 'unset'
  let t;
  console.log(t, typeof t);

  // null is similar to undefined, but needs
  // to be explicitly set
  t = null;
  console.log(t, typeof t);
}

function typeCoercion() {
  let a = '123';
  let b = 45;
  let c = a + b;
  console.log(typeof (c + c), c + c); // string12345
}

function truthyAndFalsy() {
  // Examples of truthy values
  if (true) {
    console.log('true is truthy');
  }

  if ('hello') {
    console.log('Non-empty string is truthy');
  }

  if (42) {
    console.log('Number (other than 0) is truthy');
  }

  if ({ key: 'value' }) {
    console.log('Object is truthy');
  }

  if (['apple', 'orange']) {
    console.log('Array is truthy');
  }

  // Examples of falsy values
  if (false) {
    console.log('false is falsy');
  }

  if (0) {
    console.log('0 is falsy');
  }

  if ('') {
    console.log('Empty string is falsy');
  }

  if (null) {
    console.log('null is falsy');
  }

  if (undefined) {
    console.log('undefined is falsy');
  }

  if (NaN) {
    console.log('NaN is falsy');
  }
}

function looseEquality() {
  let boolValue = true;
  let actualNumber = 1;

  if (boolValue == actualNumber) {
    console.log('Equal!'); // This may be unexpected, as boolean true is coerced to 1
  } else {
    console.log('Not equal!');
  }

  let nullValue = null;
  let undefinedValue;

  if (nullValue == undefinedValue) {
    console.log('Equal!'); // This is expected, as null and undefined are loosely equal
  } else {
    console.log('Not equal!');
  }

  let strValue = 'false';
  if (strValue) {
    console.log('true'); // A non-empty string
  } else {
    console.log('Not equal!');
  }

  if (strValue == true) {
    console.log('Equal!'); // Non-empty string is considered 'truthy'
  } else {
    console.log('Not equal!');
  }

  // To avoid this, JavaScript introduced a tight equality operator
  // '===' with no type coersion  
}

declareVar();
declareFunctionScoped();
primitiveTypes();
typeCoercion();
truthyAndFalsy();
looseEquality();
