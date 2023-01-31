// function compare(a,b) {
//     if(a===b){
//         return true;
//     }
//     return false;
// }

// console.log(compare(1,2))

function compare(a){
    let obj ={
        A:console.log('A'),
        B:console.log('B')
    }
    return obj[a]
}
compare('A')