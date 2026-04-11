const globalVar = "I am global";
function scopeTest() {
  
    let functionVar = "I am inside a function";
    
    if (true) {
        
        let blockVar = "I am inside a block";
        const blockConst = "Me too";
        var legacyVar = "I leak out of blocks!"; 

        console.log(globalVar);   // ✅ Works
        console.log(functionVar); // ✅ Works
        console.log(blockVar);    // ✅ Works
    }

    console.log(legacyVar); 
   
}

scopeTest();