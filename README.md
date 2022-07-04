# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./assets/desktop-screenshot.png)
![](./assets/mobile-screenshot.png)

### Links

- Solution URL: [Git Repo](https://github.com/8xMohab/intro-component-with-signup-form)
- Live Site URL: [Live on git pages](https://8xmohab.github.io/intro-component-with-signup-form/)

## My process

First, I created a simple npm app template, then added the readme and other assets to the project. Then I wrote down the html of the component and added the google fonts, my stylesheet, jquery and my script, then wrote the style with sass and made the form validator. Then created the git repository and uploaded the files.

### Built with

- HTML5
- SASS
- Mobile-first workflow
- Jquery Library

### What I learned

I learned how to make form validation, style the input and its attributes

````html When I add a pseudo element with content = attr(err-msg) every div will already have its own custom error message.
<div class="" err-msg="First Name cannot be empty">
  <input type="text" name="firstName" placeholder="First Name" />
</div>


````

### Useful resources

- [W3schools](https://www.w3schools.com/) - This helped me for the syntax and documentation of elements

## Author

- Frontend Mentor - [@8xMohab](https://www.frontendmentor.io/profile/8xMohab)
- Twitter - [@8xMohab](https://twitter.com/8xMohab)
