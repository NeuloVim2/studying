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

// System: Ukraine(as state)
// Singletones: President of Ukraine, Cabinet of Ministers, Parlament
// Why: To create one point of access for client and another API. For example we want to create law but if
//      every object would have possibility to do this, it will destroy the system, that why we create singletone

const State = ( () => {
    let president = null,
        cabinetOfMinisters = null,
        parlament = null,
        anotherPresident = null,
        anotherCabinetOfMinisters = null,
        anotherParlament = null;

    return class {

        constructor(){
            president = new President();
            anotherPresident = new President();
            cabinetOfMinisters = new CabinetOfMinister();
            anotherCabinetOfMinisters = new CabinetOfMinister();
            parlament = new Parlament();
            anotherParlament = new Parlament();
        }

        init(){
            console.log(`== president ==`)
            president.makeOrder('order1');
            console.log(`number of orders created are ${president.getOrderNum} \n`);
            president.makeOrder('order2');
            console.log(`number of orders created are ${president.getOrderNum} \n`);

            console.log(`== cabOfMin ==`)
            cabinetOfMinisters.makeAct('act1');
            console.log(`number of acts created are ${cabinetOfMinisters.getActNum} \n`);
            cabinetOfMinisters.makeAct('act2');
            console.log(`number of acts created are ${cabinetOfMinisters.getActNum} \n`);

            console.log(`== parlament ==`)
            parlament.createLaw('law1');
            console.log(`number of laws created are ${parlament.getLawNum} \n`);
            parlament.createLaw('law2');
            console.log(`number of laws created are ${parlament.getLawNum} \n`);

            console.log(`== try to use create and another instance of President, Parlament, CabinetOfMinister ==`)
            anotherPresident.makeOrder('order3');
            console.log(`number of orders created are ${president.getOrderNum} \n`);
            anotherCabinetOfMinisters.makeAct('act3');
            console.log(`number of acts created are ${anotherCabinetOfMinisters.getActNum} \n`);
            anotherParlament.createLaw('law3');
            console.log(`number of laws created are ${anotherParlament.getLawNum} \n`);

        }

    }
})();

// Singletones
const President = ( () => {

    // private members
    let instanse = null;
    let orderNum = 0;

    return class {
         constructor () {
            if(!instanse) {
                instanse = this
            }
            return instanse;
        };
        makeOrder(name) {
            console.log(`make order ${name}\n`);
            orderNum++;
        }
        get getOrderNum() {
            return orderNum;
        }
    }


})()
const CabinetOfMinister = ( () => {

    // private members
    let instanse = null;
    let actNum = 0;

    return class {
        constructor () {
            if(!instanse) {
                instanse = this
            }
            return instanse;
        };
        makeAct(name) {
            console.log(`make order ${name}\n`);
            actNum++;
        }
        get getActNum() {
            return actNum;
        }
    }


})()
const Parlament = ( () => {

    // private members
    let instanse = null;
    let lawNum = 0;

    return class {
        constructor () {
            if(!instanse) {
                instanse = this
            }
            return instanse;
        };
        createLaw(name) {
            console.log(`make order ${name}\n`);
            lawNum++;
        }
        get getLawNum() {
            return lawNum;
        }
    }


})()

const ukraine = new State();
ukraine.init();