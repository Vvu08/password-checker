# Deployment

Link: https://password-checker-steel.vercel.app/

# About

Create applications to test password strength.

## The essence of the assignment:

- Create a field for entering a password, under the field add 3 sections which will show the strength of the password;
- Changes in password strength must take place in real time;
- How to calculate the strength of a password:
  - Only letters/digits/symbols - the password is easy;
  - Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
  - Has letters, symbols and numbers - the password is strong;
- The color of the sections will depend on the strength of the password:
  - If the field is empty, all sections are gray;
  - If the field has less than 8 characters, all sections are red;
  - If the password is easy - the first section is red the rest are gray;
  - If the password is medium - the first two sections are yellow the last one is gray;
  - If the password is strong, all sections are green;

# Solving

The following steps have been compeleted:

- Created React TypeScript App by Vite
- Added PasswordChecker Component
- Added usePasswordStrength Hook in hooks folder to set strength of the password and minify the code in the Component
- Changing color of the sections was implemented by CSS Styles according to the type of Password Strength

# Run Locally

Clone the project

```bash
  git clone https://github.com/Vvu08/password-checker
```

Go to the project directory.

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
