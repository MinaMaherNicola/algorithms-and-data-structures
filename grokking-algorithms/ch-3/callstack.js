function greet(name) {
  console.log('Hello from greet one ' + name);
}

function greet2(name) {
  console.log('Hello from greet two ' + name);
}

function bye(name) {
  console.log('Bye ' + name);
}

function conversation(name) {
  greet(name);
  greet2(name);
  bye(name);
}

conversation('Mina Nicola');
