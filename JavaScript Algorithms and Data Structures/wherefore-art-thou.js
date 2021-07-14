function whatIsInAName(collection, source) {
    let arr = [];
    // Only change code below this line
    arr = collection.filter(item => item.last === source.last);
    // Only change code above this line
    return arr;
  }
