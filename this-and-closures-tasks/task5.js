/*
Task 5
*/

function myFunction() {
  var myObject = {
    objProperty: "string",
    objMethod() {
      return myObject.objProperty;
		}
  }
  
  return myObject.objMethod();
};
// Test case
console.log(myFunction());
