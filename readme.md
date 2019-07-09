## .env file

environment file

```
JWT_SECRET=secret
MAIL_USER=xyz@xyz.com
MAIL_PASSWORD=password
MONGO_STRING=mongostring
```

## install dependencies

```
$ npm install
```

## run

```
$ node server.js
```

## Generate email

```
POST /api/create

body json

{
	"full-name" : "name",
	"email-address" : "email",
}

```

## TODO

- [*] sending email
- [ ] cleaning design and text "path : server/template/mail2.hbs
