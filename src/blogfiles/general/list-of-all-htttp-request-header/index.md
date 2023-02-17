learn from here: https://www.geeksforgeeks.org/http-headers/
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
https://flaviocopes.com/http-request-headers/#from


must-
https://www.youtube.com/watch?v=DxeSGUM16_4


The HTTP Request Headers List
Every HTTP request has a set of mandatory and optional headers. This post aims to list all those headers, and describe them.

Standard headers
A-IM
Accept
Accept-Charset
Accept-Encoding
Accept-Language
Accept-Datetime
Access-Control-Request-Method
Access-Control-Request-Headers
Authorization
Cache-Control
Connection
Content-Length
Content-Type
Cookie
Date
Expect
Forwarded
From
Host
If-Match
If-Modified-Since
If-None-Match
If-Range
If-Unmodified-Since
Max-Forwards
Origin
Pragma
Proxy-Authorization
Range
Referer
TE
User-Agent
Upgrade
Via
Warning
Non-standard headers
Dnt
X-Requested-With
X-CSRF-Token
Standard headers
A-IM
A-IM: feed

Instance manipulations that are acceptable in the response. Defined in RFC 3229

Accept
Accept: application/json

The media type/types acceptable

Accept-Charset
Accept-Charset: utf-8

The charset acceptable

Accept-Encoding
Accept-Encoding: gzip, deflate

List of acceptable encodings

Accept-Language
Accept-Language: en-US

List of acceptable languages

Accept-Datetime
Accept-Datetime: Thu, 31 May 2007 20:35:00 GMT

Request a past version of the resource prior to the datetime passed

Access-Control-Request-Method
Access-Control-Request-Method: GET

Used in a CORS request

Access-Control-Request-Headers
Access-Control-Request-Headers: origin, x-requested-with, accept

Used in a CORS request

Authorization
Authorization: Basic 34i3j4iom2323==

HTTP basic authentication credentials

Cache-Control
Cache-Control: no-cache

Set the caching rules

Connection
Connection: keep-alive

Control options for the current connection. Accepts keep-alive and close. Deprecated in HTTP/2

Content-Length
Content-Length: 348

The length of the request body in bytes

Content-Type
Content-Type: application/x-www-form-urlencoded

The content type of the body of the request (used in POST and PUT requests).

Cookie
Cookie: name=value

See more on Cookies

Date
Date: Tue, 15 Nov 1994 08:12:31 GMT

The date and time that the request was sent

Expect
Expect: 100-continue

It’s typically used when sending a large request body. We expect the server to return back a 100 Continue HTTP status if it can handle the request, or 417 Expectation Failed if not

Forwarded
Forwarded: for=192.0.2.60; proto=http; by=203.0.113.43

Disclose original information of a client connecting to a web server through an HTTP proxy. Used for testing purposes only, as it discloses privacy sensitive information

From
From: user@example.com

The email address of the user making the request. Meant to be used, for example, to indicate a contact email for bots.

Host
Host: flaviocopes.com

The domain name of the server (used to determined the server with virtual hosting), and the TCP port number on which the server is listening. If the port is omitted, 80 is assumed. This is a mandatory HTTP request header

If-Match
If-Match: "737060cd8c284d8582d"

Given one (or more) ETags, the server should only send back the response if the current resource matches one of those ETags. Mainly used in PUT methods to update a resource only if it has not been modified since the user last updated it

If-Modified-Since
If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT

Allows to return a 304 Not Modified response header if the content is unchanged since that date

If-None-Match
If-None-Match: "737060cd882f209582d"

Allows a 304 Not Modified response header to be returned if content is unchanged. Opposite of If-Match.

If-Range
If-Range: "737060cd8c9582d"

Used to resume downloads, returns a partial if the condition is matched (ETag or date) or the full resource if not. See more

If-Unmodified-Since
If-Unmodified-Since: Sat, 29 Oct 1994 19:43:31 GMT

Only send the response if the entity has not been modified since the specified time

Max-Forwards
Max-Forwards: 10

Limit the number of times the message can be forwarded through proxies or gateways

Origin
Origin: http://mydomain.com

Send the current domain to perform a CORS request, used in an OPTIONS HTTP request (to ask the server for Access-Control- response headers)

Pragma
Pragma: no-cache

Used for backwards compatibility with HTTP/1.0 caches

Proxy-Authorization
Proxy-Authorization: Basic 2323jiojioIJOIOJIJ==

Authorization credentials for connecting to a proxy

Range
Range: bytes=500-999

Request only a specific part of a resource

Referer
Referer: https://flaviocopes.com

The address of the previous web page from which a link to the currently requested page was followed.

TE
TE: trailers, deflate

Specify the encodings the client can accept. Accepted values: compress, deflate, gzip, trailers. Only trailers is supported in HTTP/2

User-Agent
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36

The string that identifies the user agent

Upgrade
Upgrade: h2c, HTTPS/1.3, IRC/6.9, RTA/x11, websocket

Ask the server to upgrade to another protocol. Deprecated in HTTP/2

Via
Via: 1.0 fred, 1.1 example.com (Apache/1.1)

Informs the server of proxies through which the request was sent

Warning
Warning: 199 Miscellaneous warning

A general warning about possible problems with the status of the message. Accepts a special range of values.

Non-standard headers
There are some widely used non-standard headers as well, including:

Dnt
DNT: 1

If enabled, asks servers to not track the user

X-Requested-With
X-Requested-With: XMLHttpRequest

Identifies XHR requests

X-CSRF-Token
X-CSRF-Token: <TOKEN>

Used to prevent CSRF
