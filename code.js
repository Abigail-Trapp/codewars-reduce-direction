function dirReduc(arr){
  const opposites = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH':'NORTH', 'WEST':'EAST'} // creates every possible opposite scenario that can occur and should be removed if present. 
  const result = [] // Starts empty but is influenced based on the forEach "if statement" scenarios, and new result is returned based on the argument's condition. 
  arr.forEach(i =>{ // forEach will execute a specific function for every index in the "result" array.
    if(result.length){ // If there is any element inside "result" array.
      const prevItem = result.pop() // Variable that removes final index in "result" array.
      if(prevItem !== opposites[i]){ // If the item that is to be removed is not equal to any element inside "opposites" object.
        result.push(prevItem) // Add "prevItem" to "result" array.
        result.push(i) // Also add the index from "opposites" to "result" array.
      }
    }else{ // In general, if none of the other scenarios above apply...
      result.push(i) // Add item from "opposites" to "results".
    }
  })
  return result // return new state of "result"
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))

// Function below was the easiest to understand but also the most tediously written. 

// function dirReduc(arr){
//   const result = []
//   for(let i = 0; i < arr.length; i++) {
//       if(arr[i] === "NORTH" && arr[i + 1] === "SOUTH" 
//    || arr[i] === "SOUTH" && arr[i + 1] === "NORTH" 
//    || arr[i] === "EAST" && arr[i + 1] === "WEST" 
//    || arr[i] === "WEST" && arr[i + 1] === "EAST"){
//           i++
//       } else {
//           if(result[result.length - 1] === "NORTH" && arr[i] === "SOUTH" 
//    || result[result.length - 1] === "SOUTH" && arr[i] === "NORTH" 
//    || result[result.length - 1] === "EAST" && arr[i] === "WEST" 
//    || result[result.length - 1] === "WEST" && arr[i] === "EAST"){
//               result.pop()
//           } else {
//               result.push(arr[i])
//           }
//       }
//   }
//   return result
// }