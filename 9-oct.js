// 31. Write a function to sort an array of strings by their length.
const sortArrayOfString = (arr) => {
  return arr.sort((a, b) => a.length - b.length);
};

console.log(sortArrayOfString(["arredfs","aa","babs","ramesh","krimitika"]));
// 32. What is the difference between `call()`, `apply()`, and `bind()`?

/*we can use call function fro accessing variable or method from another object
The apply method works similarly to call, but instead of passing arguments individually, it accepts them as an array.
3. bind
The bind method creates a new function with a specified this context and optional pre-set arguments, but does not invoke the function immediately. 
Instead, it returns a new function that can be called later.*/