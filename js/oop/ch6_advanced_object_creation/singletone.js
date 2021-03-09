// SINGELTONE is creational design pattern. It involve only one entity wich is responsible for making sure it creates only one instace 
// and provides global point of access to itself.

// In JS all object literal is singeltone already.
// After instantiation of "mySingeltone" object there is no way to create another object from class,
// cause there is no class, obvioesly:))
const mySingeltone = {
    prop1: 'value1',
    prop2: 'value2'
}

// So if we can creates singleton with literals why to bother with constructor?
// We can create singletone with litteral but we can't controll the time of creation of singletone. It can leads to memory waste
// For example if we will crete singletone but never use it we will waste memory on unnseccory data.
// That where JS constructors are usefull

// JS constructor have intresting behaivor
// If we will try to return primitive within counstructor with "return" statement it will be ignored
// But if we will try to return object it will return object from "return" statement and object bound to this will be lost

// We can use to create singletone

// Create singletone with function constructor
console.clear();
console.log(`\n<=== Singletone Section ===>\n`);
console.log(`Create "mySingletone2" singletone \n`);
const mySingeltone2 = ( function () {

    // === Algorithm for singletone creation ===
    //
    // 1. Let "instanse" be null
    // 2. Let Constructor()
    //  1.1. If doesNotExist("instanse")
    //    1.1.1  assign to "instanse" - this value
    //  1.2. Return "instanse"
    // 2. Return Constructor
    // 3. Return IIEF

    let instanse = null;

    let counter = 0;

    let Constructor = function() {

        if( !instanse ) {
            instanse = this;
        }

        return instanse;
    }

    Constructor.prototype.newId = function() {
        return ++counter;
    }
    return Constructor;
})();

console.log(`Let g = new mySingeltone2()\n`);
let g = new mySingeltone2();

console.log(`Invoke newId method two times:`);
console.log(` First g.newId() result: ${g.newId()}`);
console.log(` Second g.newId() result: ${g.newId()}`);
console.log(`\n`);

console.log(`Let gl = new mySingeltone2()\n`);
let gl = new mySingeltone2();

console.log(`Invoke gl.newId()\n`);
console.log(`Expected result should be 3, and actual: ${gl.newId()}\n`);