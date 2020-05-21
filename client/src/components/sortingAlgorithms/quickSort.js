let animations = [];

export const quickSort = (arr, start, end) => {
  if (start >= end) return;
  let index = partition(arr, start, end, animations);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);

  return animations;
};

const partition = (arr, start, end, animations) => {
  let pivotIndex = start;
  let pivotValue = arr[end];

  for (let i = start; i < end; i++) {
    animations.push = [start, end]; // Add color
    animations.push = [start, end]; // Remove color
    if (arr[i] < pivotValue) {
      animations.push = [i, pivotIndex]; // Add swap animation
      swap(arr, i, pivotIndex);
      pivotIndex++;
    } else {
      animations.push = [-1, -1];
    }
  }
  swap(arr, pivotIndex, end); // Swap the pivotIndex val with the end
  return pivotIndex;
};

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
