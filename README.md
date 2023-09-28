# Simple React Login Form with Custom Hook
[Live Demo](https://statuesque-cascaron-242a94.netlify.app/)

This is a simple React application that provides a login form with email and password input fields. It also includes a "Forgot Password" feature that allows users to reset their password using their email address. The email input state is managed using a custom hook called `useLocalstorage`.

## Table of Contents

- [Usage](#usage)

- [Custom Hook: `useLocalstorage`](#custom-hook-uselocalstorage)
- [Contributing](#contributing)
- [License](#license)
- [Installation](#installation)


## Usage

This React application provides a simple login form with two input fields for email and password. It also includes a "Forgot Password" link that allows users to reset their password using their email.

To use the login form, follow these steps:

1. Enter your email address in the "Email" input field.

2. Enter your password in the "Password" input field.

3. Click the "Login" button to log in.

4. If you forget your password, click the "Forgot Password" link. This will take you to a password reset page where you can enter your email address and receive a password reset link in your email inbox.

## Custom Hook: `useLocalstorage`

The custom hook `useLocalstorage` is used in this project to manage the email input value. This hook allows you to store and retrieve the email input value from the browser's local storage, ensuring that the email remains persistent even if the user refreshes the page or navigates away.

The `useLocalstorage` hook is defined in the `useLocalstorage.js` file and is imported and used in both the `Login` and `Forgotpass` components to synchronize and manage the email input state.

```javascript
import useLocalstorage from "./useLocalstorage";

// ...

const { email, setEmail } = useLocalstorage();
