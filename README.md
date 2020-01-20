# codezone form validation package

this is simple form validation package -- NOT FOR PRODUCTION USE -- it's a youtube session 
[https://www.youtube.com/watch?v=eHGn2vebhdE](https://www.youtube.com/watch?v=eHGn2vebhdE)

## Installation

using npm

```bash
npm install --save codezone-form-validation-package
```

## Usage

index.html

```html
    <form>
      <label>Username</label>
      <input type="text" name="username" />
      <br />
      <label>Password</label>
      <input type="text" name="password" />
      <br />
      <button type="submit" id="submitForm">Submit</button>
    </form>
```

app.js

```javascript
import { codeZoneFormValidation } from 'codezone-form-validation-package'

document.querySelector("#submitForm").addEventListener("click", (e) => {
  e.preventDefault();
  const myFrom = codeZoneFormValidation([
    {
      name: "username",
      rules: [
        { name: "required", value: true, errMsg: "this input is required" },
        { name: "maxLength", value: 10, errMsg: "maxlength error" }
      ]
    },
    {
      name: "password",
      rules: [
        { name: "required", value: true, errMsg: "this input is required" },
        { name: "minLength", value: 5, errMsg: "minlength error" }
      ]
    }
  ]);
});

```

## PARAMETERS

```javascript

codeZoneFormValidation([
  {
      name: "Input name that assigned to name property eg: username",
      rules: [
        { name: "required", value: true, errMsg: "this input is required" },
        { name: "maxLength", value: 10, errMsg: "maxlength error" },
        { name: "minLength", value: 3, errMsg: "minlength error" },
        { name: "pattern", value: /\$.js/, errMsg: "Pattern error" },

      ] // array of validation rules
    },
]);

// validation rule object 
{name: 'required | maxLength | minLength | pattern', value: "", errMsg: 'provided error msg'}
```
