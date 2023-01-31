function User(firstName) {
  this.firstName = firstName;
  this.getName = function () {
    return `${this.firstName}`;
  };
}
User.prototype.className = "F8";
User.prototype.getClassName = function () {
  return this.className;
};
const user = new User("Pham");
console.log(user.getClassName());
