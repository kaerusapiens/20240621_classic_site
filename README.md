# Table of Content


- [log](#log)
- [repositoy_purpose](#repository_purpose)
- [Notes for node.js](#Node.js)
- [Using Node.js vs. Apache](#comparison)

# log
1. `npm init`

initializes a new Node.js project and creates a package.json file with default settings

2. `npm install express`
3. `node app.js`

# repository_purpose
for creating classic site and host on local node.js.
understanding the javascript language of backend role.

# Node.js
Node.js application for running a web server on your local machine, listening for requests on port 3000.

Node.js is a runtime environment that allows you to run JavaScript on the server side. It provides a non-blocking, event-driven architecture that is well-suited for building scalable web applications. Using Node.js to run a web server involves using modules like http or frameworks like Express to handle HTTP requests and responses.


# Comparison
Using Node.js vs. Apache
## Node.js:
Runs JavaScript code on the server side.
Often used for building modern, scalable, real-time web applications.
Uses non-blocking I/O and event-driven architecture.
Ideal for single-page applications (SPAs), RESTful APIs, and microservices.

For production environments, you might want to use a more robust setup, possibly involving a reverse proxy server like Nginx in front of your Node.js application to handle incoming requests and serve static files more efficiently.

## Apache:

A traditional web server used to serve static content and dynamic web pages (via PHP, Perl, Python, etc.).
Handles multiple protocols (HTTP, HTTPS, FTP, etc.).
Well-suited for serving static websites and content management systems (CMS) like WordPress.