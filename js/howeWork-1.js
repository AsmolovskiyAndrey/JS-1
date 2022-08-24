function includes(array, value) {
  // Change code below this line
    let result = false;
    for (const iter of array) {
        if (iter === value) {
            result = true;
            return result;
        }
    }
    return result;
  // Change code above this line
}
