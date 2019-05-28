## .env file

environment file

```
JWT_SECRET=secretkey
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
	"name" : "name",
	"email" : "email",
	"info" : "more"
}

```

## TODO

[ ] sending email
[ ] cleaning design "path : server/template/mail1.hbs
