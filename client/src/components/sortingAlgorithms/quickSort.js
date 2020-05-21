export const quickSort = (arr, start, end) => {
  let animations = [];
  quickSortHelper(arr, start, end, animations);
  return animations;
};

const quickSortHelper = (arr, start, end, animations) => {
  if (start < end) {
    let pivot = partition(arr, start, end, animations);
    quickSortHelper(arr, start, pivot - 1, animations);
    quickSortHelper(arr, pivot + 1, end, animations);
  }
};

const partition = (arr, start, end, animations) => {
  let pivot = end;

  let i = start - 1,
    j = start;

  while (j < pivot) {
    animations.push(["compare", j, pivot]);
    if (arr[j] > arr[pivot]) {
      j++;
    } else {
      i++;
      animations.push(["swap", j, i]);
      swap(arr, j, i);
      j++;
    }
  }

  //The value at arr[i + 1] will be greater than the value of arr[pivot]
  animations.push(["swap", i + 1, pivot]);
  swap(arr, i + 1, pivot);

  return i + 1;
};

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
