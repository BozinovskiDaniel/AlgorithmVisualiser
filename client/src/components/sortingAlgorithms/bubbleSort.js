export const bubbleSort = (arr) => {
  let animations = [];
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    // Last i elements are already in place
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let animation = {};
        animation.swap = [j, j + 1];
        animations.push(animation);
        //console.log(arr);
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
