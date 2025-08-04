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
