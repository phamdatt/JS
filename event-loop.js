

function evenloop(){
    console.log(1);
    console.log(2);
    setTimeout(() => {
    console.log(4)
    }, 0);
    setTimeout(() =>{
        console.log(3);
    },3000);
    console.log(5);
}
evenloop()