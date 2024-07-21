let arr = ['3,2,5,7,8,1'];
let elementToRemove = ['3', '1'];
let string = arr.toString();
var array = string.split(",");


array = array.filter(function(element) {
    return !elementToRemove.includes(element);
})

console.log(array)

/*

if (index > -1){   
    for (let i = 0; i < array.length - 1; i++){
        if (array[i] === '2'){
            array.splice(index, 1);
            var d = array.join();
            console.log(d)
        }
    }

    
}
*/



