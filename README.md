# Tutorial-7

## Setup

Run the following commands to start the server

```

./startup.sh
./run.sh

```

## Task 1 - Hook up submit handlers to the login and register pages

Currently, the form will submit the current page. This is unwanted in our case
since the login/register endpoints are not under the `site-pages` url path.

You need to hookup onsubmit event handlers to both the login and register forms.

The event handlers should make an ajax request to `/accounts/(register/login)/`

## Task 2 - Make alerts

In `site_pages/static/site_pages/login.js`, make alerts so that 
there is an error message at one of the corners of the page when there is an error.

The alert should disappear after a certain amount of time or be closeable.

## Task 3 - Typewriter effect

Type writer effect is an animation where text is being typed character by character.

use the activateTypeWriter(dataText) function in `site_pages/static/site_pages/shared.js`
to create a typewriter effect in the index page of the application

## Task 4 - Picture upload preview

After logging in, go to the Edit Profile page.
When an image is uploaded, it should change the image in the frontend without making a request to the backend.

## Task 5 - Complete the `loadNavbar` and `loadNavbarGuest` functions in `site_pages/static/site_pages/shared.js`

Complete the lines of code required by these two functions

