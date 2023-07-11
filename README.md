# **SchedTwo-Backend**

## 1. User Authentication & Authorization with JWT(JSONWebToken)

I have built a Node.js Express application that supports User Authentication and Authorization using JWT and intergrates with MongoDB for data storage. Here is a link for more info about JSONWebTokens (https://auth0.com/docs/secure/tokens/json-web-tokens).

The following examples are expected behaviors of user with this application.

- User can signup new account, or login with username & password.
- By role (admin, moderator, user), the user has access to protected resources or not.

These are **APIs** that the application is able to provide.

| Method | Urls             | Actions                    |
|--------|------------------|----------------------------|
| POST   | /api/auth/signup | signup new account         |
| POST   | /api/auth/signin | login an account           |
| GET    | /api/test/all    | retrieve public content    |
| GET    | /api/test/user   | access User’s content      |
| GET    | /api/test/mod    | access Moderator’s content |
| GET    | /api/test/admin  | access Admin’s content     |

### An overview of our Node.js Express App
In Express routes, before reaching the security layer, an HTTP request that matches a route will be checked by the CORS middleware.

Security layer includes:
  - JWT Authentication Middleware: verify SignUp, verify token
  - Authorization Middleware: check User’s roles with record in database

Controllers utilize the Mongoose library to interact with a MongoDB database and retrieve data. They also handle client requests and send HTTP responses, which may include tokens, user information, and data specific to different user roles.


Here is a link for more info. https://www.bezkoder.com/node-js-mongodb-auth-jwt/