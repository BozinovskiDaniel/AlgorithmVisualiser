export const selectionSort = (arr) => {
  let animations = [];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      animations.push(["compare", j, min_idx]);
      if (arr[j] < arr[min_idx]) min_idx = j;
    }

    // Swap the found minimum element with the first element
    animations.push(["swap", min_idx, i]); // Swap animation
    swap(arr, min_idx, i);
  }

  return animations;
};

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
