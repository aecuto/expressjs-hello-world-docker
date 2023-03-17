# Expressjs Hello world

  - simple app
  - dockerfile
  - nodemon
  - morgan


## run in docker

```
version: '3.3'
services:
  app:
    image: aecutox/expressjs-simple:latest
    ports:
     - 8000:8000
```