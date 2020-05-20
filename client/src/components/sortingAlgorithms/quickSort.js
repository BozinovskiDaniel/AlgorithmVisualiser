let animations = [];

export const quickSort = (arr, start, end) => {
  if (start >= end) return;
  let index = partition(arr, start, end, animations);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);

  return animations;
};

const partition = (arr, start, end, animations) => {
  let animation = {};
  animation.compare = [start, end];
  let pivotIndex = start;
  let pivotValue = arr[end];

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      animation.swap = [i, pivotIndex]; // Swap animation
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  animations.push(animation);
  return pivotIndex;
};

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
