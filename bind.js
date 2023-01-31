var $this = window;
$this.firstName = "Quoc"
$this.lastName = "Tan"

const person = {
  firstName: "Tien",
  lastName: "Dat",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.getFullName());

const getPersonName = person.getFullName.bind(person);

console.log(getPersonName())