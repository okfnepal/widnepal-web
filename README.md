# 🌍 womenindatanepal website
[![MIT license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat)](https://github.com/okfnepal/widnepal-web/blob/master/LICENSE)

Web application for the steering committee of "women in data nepal"

#### Website: [womenindatanepal.org](https://www.womenindatanepal.org/)

### Project powered with:
[WordPress](https://wordpress.com/) | [NextJS](https://nextjs.org/) | [GraphQL](https://graphql.org/)

This project uses WordPress as CMS only, GraphQL to access WordPress APIs and NextJS for rendering the website.

## Clone this project
- ```git clone git@github.com:okfnepal/widnepal-web.git```
- ```cd widnepal-web```

## Setup WordPress CMS
Make sure you are in the project's root directory.
- Run: `docker-compose up -d`
- After the command exit, goto `http://localhost:8000/` on your browser.
- Setup the WordPress Dashboard by providing name of site, username, password and other information.
- Setup the timezone - `Settings > General > Timezone` (Important for blog section)
- Setup profile with First Name, Last Name, Profile Picture and Organizational Association - `User > Profile > (Additional Info, About Yourself and Additional Info)` (Important for blog section)
- You need to activate following plugins: "WP GraphQL", "WPGraphQL for Advanced Custom Fields", "Advanced custom fields" and "WID Custom Plugin". (You can manage plugins from `/wordpress/wp-content/plugins`.)

## Setup NextJS Frontend
Make sure you are in the project's root directory.
- ```npm install```
- ```npm run dev```
- Setup these three environment variables for email service available through contact form (in .env file)
  - `RECEIPIENT_MAIL` - Email of user who recieves the form data submitted through contact us form
  - `CONTACT_EMAIL_USER` - Email address of application which serves the email service
  - `CONTACT_EMAIL_PASSWORD` - Password for above email address which serves the email service
- Setup these four environment variables for getting tweets at home page (in .env file). To create these goto: https://developer.twitter.com/en/apps and click on create an app.
  - `APPLICATION_CONSUMER_KEY` - Twitter app's "API key"
  - `APPLICATION_CONSUMER_SECRET` - Twitter app's "API secret key"
  - `ACCESS_TOKEN` - Twitter app's "Access token"
  - `ACCESS_TOKEN_SECRET` - Twitter app's "Access token secret"
