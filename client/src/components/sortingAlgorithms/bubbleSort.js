export const bubbleSort = (arr) => {
  let animations = [];
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    // Last i elements are already in place
    for (let j = 0; j < len - i - 1; j++) {
      // Push once to show values being compared
      animations.push([j, j + 1]);

      // Push again to revert color of values being compared;
      animations.push([j, j + 1]);

      if (arr[j] > arr[j + 1]) {
        // Push values that we are swapping
        animations.push([j, j + 1]);
        swap(arr, j, j + 1);
      } else {
        // If there is no swap
        animations.push([-1, -1]);
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
