// homework 1

function chunkArray(array, size) {
    const result = [];
  
    for (let i = 0; i < array.length; i += size) {
  
      result.push(array.slice(i, i + size));
    }
  
    return result;
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const chunked = chunkArray(arr, 3);
  console.log(chunked);


// homework 2



const arra = [1, 2, 1, 2, 2, 2, 4, 5, 4];
function removeDuplicates(arr) {
  let removed = [];  
  

  return arra.filter(function (x) {
    if (!removed.includes(x)) {
      removed.push(x);  
      return true; 
    }
    return false;  
  });
}

console.log(removeDuplicates(arr)); 
