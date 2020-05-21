import React, { useState, useEffect } from "react";
import { getMergeSortAnimations } from "../components/sortingAlgorithms/mergeSort";
import { quickSort } from "../components/sortingAlgorithms/quickSort";
import { bubbleSort } from "../components/sortingAlgorithms/bubbleSort";
import { selectionSort } from "../components/sortingAlgorithms/selectionSort";
import {
  insertionSort,
  insertSort,
} from "../components/sortingAlgorithms/insertionSort";
import SortingNavbar from "../components/layout/SortingNavbar";

const ANIMATION_SPEED_MS = 15;

function SortingAlgorithms() {
  const [barsArray, setBarsArray] = useState(null);
  useEffect(() => {
    const array = [];
    const width = window.innerWidth;
    const size = width / 7.6;
    for (let i = 0; i < size; i++) {
      array.push(getRandomInt(5, 650));
    }
    setBarsArray(array);
  }, []);

  const bubbleSortFunc = () => {
    const animations = bubbleSort(barsArray);

    // Loop over animations and perform swaps
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName("array-bar");
        const [action, indexOne, indexTwo] = animations[i];
        const barOneStyle = arrayBars[indexOne].style;

        if (action === "sortedElement") {
          barOneStyle.backgroundColor = "#e91e63";
        } else {
          if (i > 0) {
            const [actionBefore, indexOneBefore, indexTwoBefore] = animations[
              i - 1
            ];
            if (actionBefore === "compare") {
              arrayBars[indexOneBefore].style.backgroundColor =
                "rgba(0, 190, 218, 0.75)";
              arrayBars[indexTwoBefore].style.backgroundColor =
                "rgba(0, 190, 218, 0.75)";
            }
          }
          const barTwoStyle = arrayBars[indexTwo].style;

          if (action === "swap") {
            let heightOne = arrayBars[indexOne].style.height;
            let heightTwo = arrayBars[indexTwo].style.height;

            arrayBars[indexOne].style.height = `${heightTwo}`;
            arrayBars[indexTwo].style.height = `${heightOne}`;
          } else if (action === "compare") {
            barOneStyle.backgroundColor = "#e91e63";
            barTwoStyle.backgroundColor = "#e91e63";
          }
        }
      }, i * ANIMATION_SPEED_MS);
    }
  };

  const mergeSortFunc = () => {
    const animations = getMergeSortAnimations(barsArray);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "rgba(30, 139, 195, 0.9)";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const quickSortFunc = () => {
    const animations = quickSort(barsArray, 0, barsArray.length - 1);
    // Loop over animations and perform swaps
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName("array-bar");
        const [action, indexOne, indexTwo] = animations[i];
        const barOneStyle = arrayBars[indexOne].style;
        const barTwoStyle = arrayBars[indexTwo].style;

        if (i > 0) {
          const [actionBefore, indexOneBefore, indexTwoBefore] = animations[
            i - 1
          ];
          if (actionBefore === "compare") {
            arrayBars[indexOneBefore].style.backgroundColor =
              "rgba(0, 190, 218, 0.75)";
            arrayBars[indexTwoBefore].style.backgroundColor =
              "rgba(0, 190, 218, 0.75)";
          }
        }

        if (action === "swap") {
          let heightOne = arrayBars[indexOne].style.height;
          let heightTwo = arrayBars[indexTwo].style.height;

          arrayBars[indexOne].style.height = `${heightTwo}`;
          arrayBars[indexTwo].style.height = `${heightOne}`;
        } else if (action === "compare") {
          barOneStyle.backgroundColor = "#e91e63";
          barTwoStyle.backgroundColor = "#e91e63";
        }
      }, i * ANIMATION_SPEED_MS);
    }
  };

  const selectionSortFunc = () => {
    const animations = selectionSort(barsArray);
    // Loop over animations and perform swaps
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName("array-bar");
        const [action, indexOne, indexTwo] = animations[i];
        const barOneStyle = arrayBars[indexOne].style;

        if (action === "sortedElement") {
          barOneStyle.backgroundColor = "#e91e63";
        } else {
          if (i > 0) {
            const [actionBefore, indexOneBefore, indexTwoBefore] = animations[
              i - 1
            ];
            if (actionBefore === "compare") {
              arrayBars[indexOneBefore].style.backgroundColor =
                "rgba(0, 190, 218, 0.75)";
              arrayBars[indexTwoBefore].style.backgroundColor =
                "rgba(0, 190, 218, 0.75)";
            }
          }
          const barTwoStyle = arrayBars[indexTwo].style;

          if (action === "swap") {
            let heightOne = arrayBars[indexOne].style.height;
            let heightTwo = arrayBars[indexTwo].style.height;

            arrayBars[indexOne].style.height = `${heightTwo}`;
            arrayBars[indexTwo].style.height = `${heightOne}`;
          } else if (action === "compare") {
            barOneStyle.backgroundColor = "#e91e63";
            barTwoStyle.backgroundColor = "#e91e63";
          }
        }
      }, i * ANIMATION_SPEED_MS);
    }
  };

  const insertionSortFunc = () => {
    const animations = insertSort(barsArray);

    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName("array-bar");
        const [action, indexOne, indexTwo] = animations[i];
        const barOneStyle = arrayBars[indexOne].style;

        if (action === "sortedElement") {
          barOneStyle.backgroundColor = "#e91e63";
        } else {
          if (i > 0) {
            const [actionBefore, indexOneBefore, indexTwoBefore] = animations[
              i - 1
            ];
            if (actionBefore === "compare") {
              arrayBars[indexOneBefore].style.backgroundColor =
                "rgba(0, 190, 218, 0.75)";
              arrayBars[indexTwoBefore].style.backgroundColor =
                "rgba(0, 190, 218, 0.75)";
            }
          }
          const barTwoStyle = arrayBars[indexTwo].style;

          if (action === "swap") {
            let heightOne = arrayBars[indexOne].style.height;
            let heightTwo = arrayBars[indexTwo].style.height;

            arrayBars[indexOne].style.height = `${heightTwo}`;
            arrayBars[indexTwo].style.height = `${heightOne}`;
          } else if (action === "compare") {
            barOneStyle.backgroundColor = "#e91e63";
            barTwoStyle.backgroundColor = "#e91e63";
          }
        }
      }, i * ANIMATION_SPEED_MS);
    }
  };

  const resetArray = () => {
    const array = [];
    const width = window.innerWidth;
    const size = width / 7.6;
    for (let i = 0; i < size; i++) {
      array.push(getRandomInt(5, 730));
    }

    const arrayBars = document.getElementsByClassName("array-bar");
    for (let bar of arrayBars)
      bar.style.backgroundColor = "rgba(0, 0, 66, 0.75)";
    setBarsArray(array);
  };

  return (
    <>
      <SortingNavbar
        resetArray={resetArray}
        callMergesort={mergeSortFunc}
        callQuicksort={quickSortFunc}
        callBubblesort={bubbleSortFunc}
        callSelectionsort={selectionSortFunc}
        callInsertionsort={insertionSortFunc}
      />
      <div className="array-container">
        {barsArray
          ? barsArray.map((value, index) => (
              <div
                className="array-bar"
                key={index}
                style={{ height: `${value}px` }}
              ></div>
            ))
          : null}
      </div>
    </>
  );
}

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;

  return arr.slice();
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function areArraysEqual(a, b) {
  console.log(a);
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

export default SortingAlgorithms;
