## Environment variables

```
JWT_SECRET=<secret>
MAIL_USER=<user-email@xyz.com>
MAIL_PASSWORD=<password>
MONGO_STRING=<mongo-connection-string>
```

## Steps to run

1. Install dependencies 
	```
	$ npm install
	```
2. Run the server
	```
	$ node server.js
	```

## Usage

Generate email
```
POST /api/create

body json
{
	"full-name" : "name",
	"email-address" : "email",
}
```

## TODO

- [x] sending email
- [ ] cleaning design and text "path : server/template/mail2.hbs
