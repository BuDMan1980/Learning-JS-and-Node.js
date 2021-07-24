// VARIABLES

/*
Things to remember when using variables:

	*	Cannot be a reserved keyword. These are keywords that are in JS like, let, var, if, etc.
	*	Should be meaningful, not just letters like a, b, x, etc.
	*	Cannot start with a number.
	*	Cannot contain space.
*/

/* Ways to create a variable (without a value) */

// Using only the variable name without any space.
let name;

// Using two words separated by an underscore.
let my_name;

// Using two words using camelCase(First letter capital of each word except first.)
let myName;

// Using a word and a number without any space.
let name1;

/* Using a variable without giving it a value will show up as 'undefined' */
console.log(name);
console.log(my_name);
console.log(myName);
console.log(name1);

// Now we give the variable a value
let name = "John";
console.log(name);