// Write a function that checks if a given value is an 
// instance of a given class or superclass.
// For this problem, an object is considered an instance 
// of a given class if that object has access to that class's methods.
// There are no constraints on the data types that can be 
// passed to the function. For example, the value or the 
// class could be undefined.
//2618

function checkIfInstanceOf(obj, classFunction) {

    if (obj == null || obj == undefined || typeof classFunction != 'function') {
        return false;
    }

    let potentialPrototype = Object.getPrototypeOf(obj);

    while (potentialPrototype != null) {
        if (potentialPrototype === classFunction.prototype) {
            return true;
        }
        potentialPrototype = Object.getPrototypeOf(potentialPrototype);
    }

    return false;

};

console.log(checkIfInstanceOf(obj, classFunction));