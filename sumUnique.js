/**
 * @description sum only unique numbers of an array
 */
const sumUnique = (nums) => {

		if(!nums) {
    	throw new Error("Only array are accepted as input.");
    }
    
    let sum = 0;
    const arr = [...nums].sort();
    let aux = null;
    let isSameNumber = false;
    
    arr.forEach((num, i) => {
    	if(typeof num != "number") {
      	throw new Error("Only numbers are accepted as values.");
      }
      
    	if(aux == num) {
      	isSameNumber = true;
        
      } else {
        if(aux != null) {
          if(!isSameNumber) {
            sum+= aux;
            
            if(i == arr.length-1) {
            	sum+= num;
            }
          }

          aux = num;
          isSameNumber = false;
          
        } else {
        	aux = num;
        }
        
      }
    });
    
    return sum;
}

console.log(sumUnique(null));
