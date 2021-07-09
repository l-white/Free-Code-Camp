function diffArray(arr1, arr2) {
    let newArr = [];
    let itterator;
    if (arr1.length > arr2.length){
        itterator = arr1.length;
    } else if (arr1.length <= arr2.length){
        itterator = arr2.length;
    }
    for (let i = 0; i < itterator; i++){
        if (!arr2.includes(arr1[i])){
            newArr.push(arr1[i]);
        }
        if (!arr1.includes(arr2[i])){
            newArr.push(arr2[i]);
        }
    }

   let uniqueItems = [...new Set(newArr)];

   let index = uniqueItems.indexOf(undefined);
        if (index > -1){
            uniqueItems.splice(index, 1)
        }
    return uniqueItems;
  }

  diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
