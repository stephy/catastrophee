# Forms

The **Forms** model allows you to manage _multiple_ forms in your app

# Usage

### Simple Form Example

```js
import React from "React";
import { forms } from "@catastrophee/models";
import { observer } from "mobx-react";

const SIGNUP_FORM_ID = "signup";

forms.init({
  id: SIGNUP_FORM_ID,
  title: "Sign Up Form",
  fields: {
    name: "",
    email: "",
    phone: ""
  }
});

const MyForm = observer(() => {
  const signupForm = forms.getForm(SIGNUP_FORM_ID);
  const { name, email, phone } = signupForm.fields;
  return (
    <div>
      <input value={name.getValue} onChange={e => name.set(e.target.value)} />
      <input value={email.getValue} onChange={e => email.set(e.target.value)} />
      <input value={phone.getValue} onChange={e => phone.set(e.target.value)} />
      <button
        onClick={() => {
          const formdata = forms.getFormData("signup");
          // will display an object with form data
          console.log({ formdata });
        }}
      >
        Send
      </button>
    </div>
  );
});
```

### Prefilled forms

To initialize the form with pre existant data, simple add them whem initializing the fields

```js
forms.init({
  id: SIGNUP_FORM_ID,
  title: "Sign Up Form",
  fields: {
    name: "Stephani Bishop",
    email: "catastrophee@yahoo.com",
    phone: "223-782738"
  }
});
```
