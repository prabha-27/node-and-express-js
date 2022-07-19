const person = {
    name: 'chandraprabha',
    age: 25,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  const copiedPerson = { ...person };
  console.log(copiedPerson);
  
  const quadraBranches = ['coimbatore', 'Chennai','banglore'];
    const copiedArray = [   quadraBranches];
  console.log(copiedArray);
  
  const toArray = (   args) => {
    return args;
  };
  
  console.log(toArray(1, 2, 3, 4));
  