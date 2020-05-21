export const insertSort = (arr) => {
  let animations = [];
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    /* Move elements of arr[0..i-1], that are 
          greater than key, to one position ahead 
          of their current position */
    animations.push(["compare", j, i]);
    while (j >= 0 && arr[j] > key) {
      animations.push(["swap", j + 1, j]);
      //animations.push(["sortedElement", j + 1, -1]);
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  return animations;
};
