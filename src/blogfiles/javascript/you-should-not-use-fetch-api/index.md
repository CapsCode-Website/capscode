## Introduction

Fetch API is the most common and traditional way to fetch resources from the server.
`fetch()` method is available globally in both `windows` and `worker` contexts.

With all the pros, there are a few cons in using the `fetch()` API to call an endpoint and getting resources from a URI.

### Syntax of `fetch()` API
```js
fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })

//this will return a promise
```

without discussing more about `fetch()` API usage let's discuss the main topic of this article i.e cons of `fetch()` API

you can read more about `fetch()` API usage [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) & [here](https://developer.mozilla.org/en-US/docs/Web/API/fetch)



### Let's first see the example of `fetch()` API with some valid endpoint
```js
fetch("https://api.github.com/users")
  .then((response) => {
    console.log("response", response);
    return response.json();
  })
  .then((result) => console.log("success", result))
  .catch((error) => console.log("error", error));
```

_the output is straightforward._
As the API is successful, `fetch()` will return resolved promises so, it will enter inside the first `.then()` method and print the response object(raw format) and we are returning the JSON from it.
`response.json()` returns a resolved promise to a JSON object.

As the promise is resolved it will enter inside the second `.then()` method and prints the success message and the JSON output.

everything is all OK till now.

### Lets now test this with some invalid API endpoint

```js
fetch("https://api.github.com/myusers") //invalid api path
  .then((response) => {
    console.log("response", response);
    return response.json();
  })
  .then((result) => console.log("success", result))
  .catch((error) => console.log("error", error));
```

As the API endpoint is **invalid**. It should print the error statement right,

But that's not the case with `fetch()` API.
The `fetch()` promise will be resolved into the first `.then()` method and return the JSON response and then it has entered into the second `.then()` method rather than entering inside the catch method
as the base URL is valid, only the requested resource, i.e `myusers` is invalid / not present (and will return 404).

But that is not fair and may lead to major bugs/breakdown in your code.

`NOTE: fetch API only rejects into catch if the request fails due to a network error, or in other words - the request never gets to your server. If you get any response, even an HTTP 500, then the promise resolves into `.then()` method. 
[Ref.- MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful)
```js
fetch("https://api.mygithub.com/myusers") //invalid api base URL
  .then((response) => {
    console.log("response", response);
    return response.json();
  })
  .then((result) => console.log("success", result))
  .catch((error) => console.log("error", error));
//this will logs the catch method
//error TypeError: Failed to fetch
```


Then how we can resolve this issue of `fetch()` API ?

Let's see it in the next example.

```js
fetch("https://api.github.com/myusers")
  .then((response) => {
    console.log("response", response);
    if (response.ok) return response.json();
    else return Promise.reject("api failed with " + response.status + " code");
  })
  .then((result) => console.log("success: ", result))
  .catch((error) => console.log("error: ", error));
```

what we are doing here is, we are checking the status of the response we are getting before returning the resolved promise.
If the status is not 200 or `response.ok` is not true we are returning the rejected promise.
So that the catch block will get executed.



### Some of the other demerits of `fetch()` API are:
1. In `fetch()` API while passing the payload, we have to manually stringify the data whereas most of the other libraries do it automatically.
2. Automatic transformation of response data is not happening in `fetch()` API and we have to do it manually.
3. Response timeout configuration in `fetch()` API is difficult to implement.
4. `fetch()` doesn’t provide a way to intercept requests by default, and it's bit difficult to implement.
5. The `fetch()` API doesn’t have any progress bar handler function. Instead, it provides an instance of `ReadableStream` via the body property of the response object. While other libraries do have a progress bar handler function.



These are the main reason most developers avoid using fetch API in their code, as we have to write a lot of extra code to achieve a simple thing.

There are a lot of libraries and some of them are,
[Axios](https://axios-http.com/docs/intro)
[React Query](https://tanstack.com/query/v3/docs/react/overview)
[SWR](https://swr.vercel.app/)
[RTK Query](https://redux-toolkit.js.org/rtk-query/overview)



## Conclusion

No doubt, fetch is an amazing API and every beginner should learn the fetch API first and then only switch to any other libraries.
There is nothing that we cannot do with fetch API, but we have to write more codes and it will be sometimes difficult to manage. Just keep one thing in mind about fetch API is that in fetch API, only network errors are the actual errors, whereas the other libraries handle all types of errors whether it's a network error or resource not found errors automatically.

**Sorry (fetch API)[https://developer.mozilla.org/en-US/docs/Web/API/fetch]**


Thank you for reading this so far. This is a brief introduction that why we should not use fetch API for calling an API endpoint.


If you find this article useful, share this article. Someone could find it useful too. If you find anything technically inaccurate please feel free to create an [issue](https://github.com/CapsCode-Website/blogfiles/issues).

Hope it's a nice and informative read for you.
VISIT https://www.capscode.in/blog TO LEARN MORE.

