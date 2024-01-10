## Table of content

1. [Introduction](#introduction)
2. [How hoisting works in JavaScript](#how-hoisting-works-in-javascript)
3. [What is a Temporal Dead Zone (TDZ)](#what-is-temporal-dead-zone)
4. [Temporal Dead Zone of let variable](#temporal-dead-zone-of-let-variable)
4. [Temporal Dead Zone of const variable](#temporal-dead-zone-of-const-variable)
4. [Temporal Dead Zone of var variable](#temporal-dead-zone-of-var-variable)
4. [Temporal Dead Zone of functions](#temporal-dead-zone-of-functions)
5. [Why do we need TDZ](#why-we-need-temporal-dead-zone)
6. [Conclusion](#conclusion)


## Introduction <a name="introduction"></a>

Have you ever wondered why we get `ReferenceError` while accessing the variable declared with `let` or `const` before their declaration or initialization? 
That is because the variable entered into the **Temporal Dead Zone**.

It is very important to understand the working principle of Hoisting and Temporal Dead Zone so that you can write error-free and bug-free code.

Temporal Dead Zone is a time period where a variable declared with `let` and `const` exists but cannot be accessible to use it or to assign it a value.

TDZ of a variable starts at the beginning of the scope in which the variable is declared and ends at the point of the declaration of a variable.

Accessing the variable in this TDZ throws a `ReferenceError`.

**For example**
```js
//TDZ of foo starts here
.
.
.
//TDZ of foo continues here
.
.
let foo="bar" //TDZ of foo ends here
.
.
.
// TDZ of foo doesn't exist here
```


## How hoisting works in JavaScript <a name="how-hoisting-works-in-javascript"></a>

**Temporal Dead Zone** and **Hoisting** are two related concepts.
Before hoisting let's first discuss how `JavaScript` engine executes a program in short.
In `JavaScript` the program’s declarations got higher precedence over initializations, invocations, and other code. Hence whenever we declare a variable, JS engine reads it first and this is what we call `Hoisting in JavaScript`.

Note: Hoisting does not mean `JavaScript` rearranges or moves code above one another.

You can read more about how hoisting works for var, let, const, function declaration and function expressions [here](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).

When we declare the variables, JS engine `hoist` the variables and keeps them inside the TDZ (Temporal Dead Zone) until execution reaches the line of code where the actual declaration is made.


## What is a Temporal Dead Zone (TDZ)

The **T**emporal **D**ead **Z**one is a specific phase during the execution of your code where a variable declared with `let` or `const` exists but cannot be accessed.

This occurs from the start of the block or scope in which the variable is declared until the actual declaration is reached in the code.
If you try to access the variable within the Temporal Dead Zone, a `ReferenceError` will be thrown.

Keeping variables in TDZ works differently for var, let, const, function declaration and function expressions. Let's see all of these below.


## TDZ of let variable <a name="temporal-dead-zone-of-let-variable"></a>

TDZ of a variable declared with `let` starts at the beginning of the scope in which it is being declared and ends at the point/line of code where it is being declared.

**For example**
```js
//TDZ of foo starts here
.
.
.
//TDZ of foo continues here
.
.
let foo="bar" //TDZ of foo ends here
.
.
// TDZ of foo doesn't exist here
.
.
```

Here, when JS engine starts its execution it first sees the declared `foo` variable and keeps it in the **Temporal Dead Zone** until it reaches the place in the code where the variable is declared or initialized. And if we try to access the variable before it gets initialized will return a `ReferenceError`.

When the execution reaches the point where we have done the actual declaration of `foo` variable `TDZ` of `foo` ends and if we do `console.log` it will either return the initialized value or `undefined` (if not initialized with a value)

**For example**
```js
//TDZ of foo starts here

//TDZ of foo continues here
console.log(foo) //ReferenceError: foo is not defined
//TDZ of foo continues here

let foo="bar" //TDZ of foo ends here

console.log(foo) //bar

// TDZ of foo doesn't exist here
```

If we do `console.log(foo)` before the initialization of `foo` variable it will give `ReferenceError` as the variable lies in TDZ.

But the second `console.log(foo)` returns `bar` because the TDZ of `foo` variable ends when we have declared the variable.


lets see the second example,

```js
//TDZ of foo starts here

//TDZ of foo continues here
console.log(foo) //ReferenceError: foo is not defined
//TDZ of foo continues here

let foo //TDZ of foo ends here

console.log(foo) //undefined

// TDZ of foo doesn't exist here
```
The second `console.log(foo)` returns `undefined`.

**Explanation:**
While inside the TDZ, the variable has not been initialized with a value
The variable `foo` is initialized with a value when execution reaches the place in the code where it is declared. If no initial value was specified with the variable declaration, it will be initialized with a value of `undefined`.



## TDZ of const variable <a name="temporal-dead-zone-of-const-variables"></a>
 
TDZ of `const` is similar to `let` except for one difference, that we have to initialize it with a value while declaring a `const` variable, if we don't initialize it with a value it will throw an error.

**For example**

```js
//TDZ of foo starts here

//TDZ of foo continues here
console.log(foo) //ReferenceError: foo is not defined
//TDZ of foo continues here

const foo="bar" //TDZ of foo ends here
//const foo; // will throw an error

console.log(foo) //bar

// TDZ of foo doesn't exist here
```

If we do `console.log(foo)` before the initialization of `foo` variable it will give `ReferenceError` as the variable lies in TDZ.

But the second `console.log(foo)` returns `bar` because the TDZ of `foo` variable ends when we initialize it with a value.


The reason that we get a reference error when we try to access a `let` or `const` variable before its declaration is because of the Temporal Dead Zone (TDZ).

JavaScript does not initialize a `let` or `const` variable with any value whenever it hoists the variable. Instead, the variable remains dead and inaccessible and this creates what is known as `TDZ`, during which trying to access the variable results in a `ReferenceError`.

## TDZ of var variable <a name="temporal-dead-zone-of-var-variables"></a>

It is important to note that TDZ of `var` variable works differently.

When the JS engine hoists a `var` variable, it automatically initializes the variable with the value of `undefined` and the TDZ of `var` variable seems to be not exists.


**For example**

```js
//TDZ of foo starts here and ends here
console.log(foo) //undefined

//TDZ of foo doesn't exist here

var foo="bar" //TDZ of foo doesn't exist here

//TDZ of foo doesn't exist here

console.log(foo) //bar

// TDZ of foo doesn't exist here
```

As you can see in the above example the first `console.log` statement returns `undefined` because during the compilation phase, the JS engine sees the variable declared with `var` hence `hoist` the variable and also `initializes` it with the value of `undefined` and that's the reason the `TDZ` of `var` variable ends in the first line of the scope.

## TDZ of functions <a name="temporal-dead-zone-of-functions"></a>

Note that only function declarations are hoisted, not function expressions and due to which we can call/access the **function declaration** before the actual line of code where it is defined.
But for function expression, all the rules are applicable based on its definition whether it is defined using `var` `let`, or `const`.

The Temporal Dead Zone of a function declaration starts and ends at the beginning of the scope in which the function is defined.

**For example**

```javascript
//TDZ of func start and end here
.
.
//TDZ of func doesn't exist here
.
.
func() //returns hello...
.
//TDZ of func doesn't exist here
.
function func(){
    console.log('hello...')
}
.
//TDZ of func doesn't exist here
.
func() //returns hello...
.
.
```


## Why do we need TDZ <a name="why-we-need-temporal-dead-zone"></a>

1. For better coding practices

The `TDZ` ensures that variables are accessed only after they have been properly declared and initialized, promoting and reducing the likelihood of accessing variables in an `undefined` or uninitialized state.

2. To write bug-free code

The `TDZ` does not apply to the variables declared with `var`. They are hoisted to the top of their scope and can be accessed throughout the scope, even before their actual declaration. This behavior can sometimes lead to unexpected results and potential bugs if not handled carefully.

3. More reliable and predictable code

It helps catch potential issues caused by accessing variables before their initialization.


## Conclusion <a name="conclusion"></a>

**Hoisting** and **Temporal Dead Zone** are two related concepts, having knowledge of the relation between both of them and understanding and respecting the Temporal Dead Zone is an integral part of writing clean, error-free and bug-free JavaScript code. It aligns with the language's design principles and contributes to a more reliable and maintainable codebase.
