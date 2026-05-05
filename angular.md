Angular is a framework to create Single Page Applications(SPA)

Components in Angular should contain:
1. A @Componentdecorator that contains some configuration used by Angular.
2. An HTML template that controls what renders into the DOM.
3. A CSS selector that defines how the component is used in HTML.
4. A TypeScript class with behaviors, such as handling user input or making requests to a server.

The @Component decorator also optionally accepts a styles property for any CSS you want to apply to your template. You build an application by composing multiple components together. 

In Angular, you use signals to create and manage state. A signal is a lightweight wrapper around a value.

For example:
    const firstName = signal('Vasyl');

    firstName.set('Victor');

Here is the first value for firstName is 'Vasyl', but I changed the state of fistName to 'Victor' using set method of signal.
Also there is computed expressions. The difference between signal and computed expressions is that computed expressions haven't 'set' and 'update' methods.

Dynamic values:
When you need to write dynamic string, use double curly braces. for example:
<h1>{{someValue()}}</h1>

Properties and attributes. Use square braces. Example:
<button [disabled]="!isValidUserId()">Save changes</button>
or
<ul [attr.role]="listRole()"></ul>

Also I can use signal to Forms. For examole:
interface LoginData {
  email: string;
  password: string;
}
const loginModel = signal<LoginData>({
  email: '',
  password: '',
});

Then pass the form model to form() to create a FieldTree:
const loginForm = form(loginModel)
Bind HTML inputs with [formField] directive. Examples:
<input type="email" [formField]="loginForm.email" />
<input type="password" [formField]="loginForm.password" />

To access field state call field as a function:
loginForm.email();

To update a field's value programmatically use value.set() method.

Signal Forms provides built-in validators that you can apply to your form fields. To add validation, pass a schema function as the second argument to form(). Example:
const loginForm = form(loginModel, (schemaPath) => {
  debounce(schemaPath.email, 500);
  required(schemaPath.email);
  email(schemaPath.email);
});

Common validators include:

required() - Ensures the field has a value
email() - Validates email format
min() / max() - Validates number ranges
minLength() / maxLength() - Validates string or collection length
pattern() - Validates against a regex pattern

Services are reusable pieces of code that can be injected. They have they own decorator @Injectable. This decorator allows to define what part of the application can access the service via property providedIn(wich typically 'root).

To use a service in a component:
1. Import service
2. Declare a class field where the service is injected. Assign the class dield to result of the call of the function 'inject'.