/* Task 4
Singletons (7 kyu)
Singletons are classes that can only be instantiated once.
In other words, they can only have one instance.
This is useful when you want to ensure that there is only one instance of a class in your application.
*/
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
}

obj1 = new Singleton();
obj2 = new Singleton();
// Test case
console.log(obj1 === obj2);
