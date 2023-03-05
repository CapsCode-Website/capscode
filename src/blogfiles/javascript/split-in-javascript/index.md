Hello Devs,

If you have landed here then I must say that you have used the JavaScript `split()` method in your dev journey and if you haven't then do not worry, be with me and let's dive deep into `split()` method.

## Introduction

The `split()` method is used to split/break the string at the breakpoint/separator defined and return the remaining characters or string as an element of an array based on the separator (character or string or regex) passed as a first argument in `split()` method. 🤷‍♂️

![split in javascript](https://capscode-website.github.io/blogfiles/javascript/split-in-javascript/split-in-javascript.png)

**Syntax**
```js
str.split(separator, limit)
```

where
the **separator** can be a single character or string or regex describing where to break the string and push the remaining inside an output array. It is an optional field.

**limit** is the limit of the breaking points of the string, or you can say the length of an output/returned array. It should be a non-negative number, but if you provide a negative number then it will be ignored and it is treated as an empty value.

NOTE: it is important to note that the original string is unaffected after splitting it.

## Examples

### 1. Example with separator 
```js
let str = "learn with capscode"


str.split() //['learn with capscode']
//if nothing is passed as argument then array is returned with one element and that element will be str

str.split("") //['l', 'e', 'a', 'r', 'n', ' ', 'w', 'i', 't', 'h', ' ', 'c', 'a', 'p', 's', 'c', 'o', 'd', 'e']
//If an empty string ("") is passed as an argument, the string is split between each characters.

str.split(" ") //['learn', 'with', 'capscode']
//space as separator is passed, so the str is split at each space and the substring got pushed in an output array.

str.split("a") //['le', 'rn with c', 'pscode']
//string is split at each 'a' character

"one is not 1 and 2 is not two".split(1) //['one is not ', ' and 2 is not two']

console.log(str) //'learn with capscode'
//there is no change in the original string

```



## 2. Examples with separators & limits.

```js
let str = 'learn with capscode'

str.split('',2) //['l', 'e']
//separator is empty string so it will get split after each character and the split number (limit) is 2 so it will split 2 times and the rest will be ignored also the length of returned array will be 2.

str.split(" ",2) //['learn', 'with']
//separator is space, so it will get split after each space and the limit value is 2 so  it will only split 2 times and the rest will be ignored.

str.split(" ", 0)//[]
//limit value is 0, hence it will split the str 0 times.

str.split(" ", -2) //['learn', 'with', 'capscode']
//limit should be non-negative, but if we put negative limit then it will be ignored and it will be treated as an empty limit value like below one.
str.split(" ") //['learn', 'with', 'capscode']

```

## 3. Example with separator as regex

### 3.1. split on multiple keywords
```js
let str = 'CapsCode is a website where you can learn web development';
str.split(/\s+(?:is|can|where)\s+/); //['CapsCode', 'a website', 'you', 'learn web development']
```

### 3.2. split the string to count the number of sentences in a paragraph

```js
let paragraph="You are a developer.Do you know JavaScript?If you don't then you can learn it from CapsCode.I hope you love to have a cup of coffee!"
paragraph.split(/[.,!,?]/)
//['You are a developer', 'Do you know JavaScript', "If you don't then you can learn it from CapsCode", 'I hope you love to have a cup of coffee', '']
```

## Some key points to remember
```js
let str="learn with capscode"
str.split(" ","1") //['learn']
//the limit is a string
str.split(" ", "abcd") //[]
str.split(" ", "") //[]


NOTE:
"".split("") //[]
//string is empty and separator is empty string then the output will be an empty array

"".split("a") //['']
//string is empty and separator is non empty, then the returned array will ['']

```


## Conclusion
`split()` is useful when we want to break/split the string at some specific string or separator, let's say we have some id or token which is separated by underscore (_) like
`userid_sessionid_authkey` and we want to use the `userid` later in the code.

or let's say we have a user logged in & we have the full name of the user and now we want to show the first character of `firstname` and the first character of `lastname` then we can use split like `name.split(" ")[0][0]+name.split(" ")[1][0]`

and a lot more,

Thank you for reading this far. This is a brief introduction to **split method in JavaScript**.

If you find this article useful, share this article. Someone could find it useful too. If you find anything technically inaccurate, please feel free to create an [issue](https://github.com/CapsCode-Website/blogfiles/issues).

Hope it's a nice and informative read for you.
VISIT https://www.capscode.in/blog TO LEARN MORE...
See you in my next Blog article, Take care!!

Thanks, \
CapsCode