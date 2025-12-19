let intArray = [1, 2, 3, 4, 5];
for (i = intArray[0]; i <= intArray.length; i++) {
    for(j = i;j<=intArray.length;j++){
    if(i>j){
        
        console.log(`${i}`)
        return 
    }else {
        
        console.log(`${j}`);
    }

    }

} return 
