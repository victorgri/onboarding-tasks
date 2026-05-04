// TypeScript Class Decorator Example

function WithLogging(message: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log(message);
      }
    };
  };
}

@WithLogging("User instance has been created!")
class User {
  constructor(public name: string) {
    console.log("Original constructor");
  }
}

const user = new User("Viktor");