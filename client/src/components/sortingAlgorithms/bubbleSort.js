export const bubbleSort = (arr) => {
  let animations = [];
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    // Last i elements are already in place
    for (let j = 0; j < len - i - 1; j++) {
      animations.push(["compare", j, j + 1]);

      if (j === len - i - 2) {
        animations.push(["sortedElement", j + 1, -1]);
      }
      if (arr[j] > arr[j + 1]) {
        // Push values that we are swapping
        animations.push(["swap", j, j + 1]);
        swap(arr, j, j + 1);
      }
    }
  }

  return animations;
};

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
