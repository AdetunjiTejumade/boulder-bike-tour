# Boulder bike tour

A web app for a bike racing event it uses rails to collect users slogan suggestions.

[View website](https://boulder-bike-tour-app.herokuapp.com/)

![img_02](https://user-images.githubusercontent.com/46271302/123433948-f09e8300-d606-11eb-96a3-8fa7b9a8a1c5.png)


## Install

### Clone the repository
``` 
git clone https://github.com/AdetunjiTejumade/boulder-bike-tour.git 
cd boulder-bike-tour
```
## Check your Ruby version
`ruby -v`
The output should start with something like `2.7.2`

If not, install the right ruby version using rbenv (it could take a while):

`rbenv install 2.7.2`

## Install dependecies:
``` 
bundle install
yarn install
```

## Initialize the database
`rails db:create db:migrate db:seed`

## Serve

`rails s`
And now you can visit the site with the URL http://localhost:3000
