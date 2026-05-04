/* Convert task5 from this and closure tasks to TypeScript */

function returnObjectProperty(): string {
  const myObject = {
    objProperty: "string",
    objMethod() {
      return myObject.objProperty;
    }
  }
  
  return myObject.objMethod();
}