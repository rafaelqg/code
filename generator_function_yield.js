function* generator_function(index) {
    while (index < 2) {
      yield index;
      index++;
    }
  }
  //function*: indicates the function is a generator function
  //.next() -- continue the generator function until the next yield is found or the funcion end/return
  //.value -- return the value that is at the right side of yield
  const iterator = generator_function(0);//seed
  console.log(iterator.next().value); // output: 0
  console.log(iterator.next().value); // output: 1
  //here the function has reached the end: the return is value given.
  console.log(iterator.next().value); 
