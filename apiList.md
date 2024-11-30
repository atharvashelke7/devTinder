# DevTinder API's

## authRouter

-POST /singup
-POST /login
-POST /logout

## profileRouter

-GET /profile/view
-PATCH /profile/edit
-PATCH /profile/password // Forgot password Api

## connectionRequestRouter

-POST /request/send/interested/:userId
-POST /request/send/igonored/:userId
-POST /request/review/accepted/:requestId
-POST /request/review /rejected/:requestId

## userRouter

-GET /user/requests
-GET /user/connections
-GET /user/feed - Gets you the proflies of user on platform

Status: Igonored,interested,accepted,rejected
