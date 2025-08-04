// implement a debounce function that delays the execution of a callback until after a specified wait time has passed since the last invocation.

export default function debounce(func, wait) {
  let timer;
  return function (...args ) {
    clearTimeout( timer )
    timer = setTimeout( ()=>
      func.apply(this, args), wait )
  }

  throw 'Not implemented!';
}


//main idea is  to use: a timer that resets every time a debounce function is called. 
 //only when the timer completes without interrruption we can execute the callback.
 //Use clearTimeout to clear previous scheduled timers.
 //Use setTimeout to schedule a new execution after wait period.
 // use func.apply( this, args) to ensure that callback runs with correct this and arguments.
