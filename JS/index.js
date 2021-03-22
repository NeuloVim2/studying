let worker = {
  someMethod() {
    return 2;
  },

  slow(x) {
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

// function cachingDecorator(func) {

//   return function(x) {
//     console.log(this);
//     debugger;
//     let result = func( x); // "this" is passed correctly now
//     debugger;

//     return result;
//   };
// }
debugger;
// worker.slow = cachingDecorator(worker.slow);

// console.log(worker.slow(10));
// worker.slow = worker.slow(10);
let func = worker.slow;
console.log(func.call(worker, 10));