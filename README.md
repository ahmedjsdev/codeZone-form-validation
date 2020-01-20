# codezone form validation package

this is simple form validation package -- NOT FOR PRODUCTION USE -- it's a youtube session 
[https://www.youtube.com/watch?v=eHGn2vebhdE]

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

```js

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
