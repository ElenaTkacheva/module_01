const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];

const addPrefix = (names) => {

    const newNames = names.map((name) => "Mr" + ' ' + name);

    return newNames;
}

console.log(addPrefix(names, "Mr"));