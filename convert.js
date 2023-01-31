function formattedTime (timestamp) {
var date = new Date(timestamp * 1000);
let days = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
console.log(days)
}
formattedTime(1671251675)