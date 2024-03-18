//var variables: Before the introduction of ES6 (ECMAScript 2015), var was the primary way to declare variables in JavaScript. Variables declared with var are function-scoped, meaning they are accessible within the function they are declared in, or globally if declared outside of any function. Variables declared with var can be reassigned and redeclared.

var name = 'keamogetswe'

//let variables: Introduced in ES6, let allows for block-scoped variable declarations. Variables declared with let are limited in scope to the block, statement, or expression they are declared in, such as within loops or conditionals. let variables can be reassigned, but not redeclared within the same scope.

let age = 24

//const variables: Also introduced in ES6, const allows for the declaration of variables with constant values. Variables declared with const are block-scoped like let, but their value cannot be reassigned once initialized. However, if the variable is an object or array, its properties or elements can still be modified.

const surname = "kgakatsi"

//Here's a quick comparison:

//var: Function-scoped, can be reassigned and redeclared.
//let: Block-scoped, can be reassigned but not redeclared.
//const: Block-scoped, cannot be reassigned after initialization, but the properties of objects or elements of arrays can still be modified.


//Using let and const is generally recommended over var due to their more predictable behavior and better scoping mechanisms.