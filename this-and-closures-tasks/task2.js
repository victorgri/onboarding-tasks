/*Task 2
Anonymous Returns (7 kyu)
When a function is called by itself it is bound to the global context; the this variable of the function will be bound to the global object.

When the getNameFunc function is called on the alpha object the value of the name variable outside of the object is returned: "The Window".

We do not want this, we want the value of the name property inside the alpha object to be returned.

Fix getNameFunc so the right value is returned.
*/

name = 'The Window';

let alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
      let self = this;
        return function() {
            return self.name;
        };
    }
};

// Test case
console.log(alpha.getNameFunc()());

