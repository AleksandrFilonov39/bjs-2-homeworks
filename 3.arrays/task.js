function compareArrays(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }else {
  return arr1.every((number, ind) => number === arr2[ind]);
        }
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter((user) => user.gender === gender).reduce((acc, age, ind, arr) => {
        acc += arr[ind].age;
        if(ind === arr.length - 1) {
            return acc / arr.length
        }
         return acc;
    },0)
  }
  
