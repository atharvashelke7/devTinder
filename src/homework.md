- initialize git
- .gitignore
- create a remote repo on github
- push all code to remote origin
- You have to play with routes and route extension ex. /hello / hello/2
- Order of the route matters a lot
- Install Postman app and make a workshop collection -> test API call
- Write Logic to handle GET, POST, PATCH, PUT, DELETE API Calls and test Them on Postman
- Explore Routing and use of ?,+,(),\* in the routes
- Use of Regex in routes /a/ , /.\*fly$/
- How to Readin the Query Params In the route
- Reading the dynamic routes
- Multiple Route Handler - Play with the code
- next()
- next function error along with the code
- What is a MiddleWare why do we need it
- How express js basically handles request behind the scenes
- Difference between app.use and app.all
- Write a dummy auth middleware for admin
- write a dummy auth middleware for user routes except /user/login
- Create a free cluster on mongodb official website(Mongodb Atlas)
- Then install mongoose library
- Connect your application to the database "connection-url"/devTinder
- call the connet db function and connect to database before starting application on 3000
- Create a user Schema and user Model
- Create Post /Signup API to add data to database
- Push some documents using api calls from postman
- Error Handling
- Add the express.json() middleware to the app
- make the signup API dynamic to receive data from the end user
- User.findOne with duplicate emailId which object will be written
- API GET user by email
- API - Feed - get all the users from the database
- Api - Get userbyId (findById)
- API to Update
- API For Delete
- Explore the mongoose Documentation for model apis
- What are options in a model.findOneAndUpdate method, explore more about it
- Explore schema type options from the documentation
- add required unique lowercase min trim minLength
- add default
- add custom validate function for checking the gender
- improve the db schema - Put all required or appropiate validation in schema
- Add timestamps to the user schema
- Add api level validation on patch request and signup post api
- Add api validation for each field (DATA SANITIZATION)
- Install validator
- Explore validator library function and use validator function for password,email
- Never trust req.body
- Validate data in Signup API
- Install bcrypt package
- Create a password hash using bcrypt.hash and save the user with encrypted password
- Create a login api
- Compare passwords and throw errors if email or password is invalid
- JWT, Cookies,cookie-parser,Auth-middleware
- Install cookie-parser
- Just send a dummy cookie to the user
- GET /profile api and check if you get the cookie back
- In login api create a jwt token
- In login api after emaol and password validation create a jwt token and send it to user in cookie
- read the cookie inside your profile api and the logged in user
- Write user auth middleware
- add the userauth middleware profile api and a new sendConnection
- Set expiry of jwt token and cookies to 7 days
- Create userSchema method to getJWT()
- create userSchema method to comparepassword(passwordInputByUser)
- Go and explore tinder apis
- Explore the data inside it
- Create a list of devTinder API'S
- Group multiple routes under respective routers
- explore the documentation for express.router
- Creates routes folder for managing auth,profile,request routers
- Create authRouter,profileRouter,requestRouter
- Import this routers in app.js
- Create logout POST /Logout API
- Create Your Patch /profile/edit
- Create PATCH /profile/password API => forgot password APi
- Make sure you validate all data in every post patch apis
- Read this article about compound index
- why do we need index in db
- What is the advantages and disadvantages of creating
- Proper validation of Data
- Think about corner cases
- Logical queries in mongoose
- Schema.pre("save") function
- Write code with proper validation for accepted request
- Thought process - POST VS GET
- Read about ref and populate
- Create API Get for /request/received with all the checks
- Logic for Get / feed API
- Explore the $nin, $ne and other methods
- Pagination

/feed?page=1&limit=10 => first 10 users 1-10 => .skip(0) & .limit(10)

/ feed?page=2&limit=10 => 11-20 => .skip(10) & .limit(10)

/ feed?page=3&limit=10 => 21-30 => .skip(20) & .limit(30)

.skip(0) & .limit(10) // skip means skip from starting and limit means how many documents


skip = (page - 1 )*limit