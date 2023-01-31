let car = {
  name: "BMW",
  color: "Black",
  price: 2000,
  getNameCar() {
    console.log(this);
  },
};

car.getNameCar();

function newCar(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
  this.run = function(){
    console.log("Running",this)
  }
}
const mescedes = new newCar("Mess", "Yellow", 1000);
mescedes.run();
