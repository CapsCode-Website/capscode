## Let's first see what an Identifier is

An **Identifier** is a user-defined name or a sequence of characters in the programming languages to define a [variable](https://developer.mozilla.org/en-US/docs/Glossary/Variable), [function](https://developer.mozilla.org/en-US/docs/Glossary/Function), or [property](https://developer.mozilla.org/en-US/docs/Glossary/property).
It can be any combination of characters, but the combination of characters has a certain boundary/ restriction.

In this article, we will see what an Identifier means in JavaScript and what all combinations of characters are allowed in JavaScript to define any variable, function, or property name.


## An Identifier in JavaScript

JavaScript identifiers are case-sensitive and can contain [Unicode](https://developer.mozilla.org/en-US/docs/Glossary/Unicode) letters, `$`, `_`, and digits (0-9), but may not start with a digit.

An identifier is not a String, as a String is data, while an identifier is part of your code. In JavaScript, there is no way to convert identifiers to strings, but sometimes it is possible to parse strings into identifiers.

We **cannot use [reserved keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words)** of JavaScript as an identifier.

## Let's see some examples of valid identifiers

```js
let name = "CapsCode"
let Name = "CapsCode"
//javascript variables are case sensitive

let firstName = "John" //any combination of characters

let _name="john" //can start with underscore

let first_name = "john" //can contain underscore

let name_="john" //can ends with underscore

let $name = "john" //can start with doller

let first$name = "john" //can contain doller

let name$ = "john" //can ends with doller

let first123name = "john" //can contain number

let name123 = "john" //can ends with number
```


## Let's see some examples of invalid identifiers

1. JavaScript variables do not contain spaces.
```js
let first name = "John" //SyntaxError
```


2. JavaScript variables do not start with numbers.
```js
let 1qw = "Rahul" //SyntaxError
```

3. Can contain **only** $
```js
let first#name = "john" //SyntaxError
let name#="john" //SyntaxError
let #name="john" //SyntaxError
```

4. do not start with the number
```js
let 123name = "john" //SyntaxError
```

5. should not be reserved keywords
```js
let switch = "john" //SyntaxError
let export = "john" //SyntaxError
let new = "john" //SyntaxError
```

## Conclusion
This is a brief introduction to what an identifier is and the various ways to define/ crete a valid identifier in JavaScript.

If you find this article useful, share this article. Someone could find it useful too. If you find anything technically inaccurate, please feel free to create an [issue](https://github.com/CapsCode-Website/blogfiles/issues).

Hope it's a nice and informative read for you.
VISIT https://www.capscode.in/blog TO LEARN MORE...
See you in my next Blog article, Take care!!

Thanks, \
CapsCode