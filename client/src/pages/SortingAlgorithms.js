import React, { useState, useEffect } from "react";
import { getMergeSortAnimations } from "../components/sortingAlgorithms/mergeSort";
import { quickSort } from "../components/sortingAlgorithms/quickSort";
import { bubbleSort } from "../components/sortingAlgorithms/bubbleSort";
import SortingNavbar from "../components/layout/SortingNavbar";

const ANIMATION_SPEED_MS = 3;

function SortingAlgorithms() {
  const [barsArray, setBarsArray] = useState(null);
  useEffect(() => {
    const array = [];
    const width = window.innerWidth;
    const size = width / 6.8;
    for (let i = 0; i < size; i++) {
      array.push(getRandomInt(5, 730));
    }
    setBarsArray(array);
  }, []);

  const bubbleSortFunc = () => {
    const animations = bubbleSort(barsArray);

    // Loop over animations and perform swaps
    for (let i = 0; i < animations.length; i++) {
      const arrBars = document.getElementsByClassName("array-bar");
      const [indexOne, indexTwo] = animations[i];
      if (indexOne === -1 && indexTwo === -1) continue;
      const barOneStyle = arrBars[indexOne].style;
      const barTwoStyle = arrBars[indexTwo].style;
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const color =
          i % 3 === 0 ? "rgba(30, 139, 195, 0.9)" : "rgba(0, 0, 0, 0.5)";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // If it's the swap
        setTimeout(() => {
          let heightOne = barOneStyle.height;
          let heightTwo = barTwoStyle.height;
          // Swap the values here
          barTwoStyle.height = `${heightOne}`;
          barOneStyle.height = `${heightTwo}`;
        }, i * ANIMATION_SPEED_MS);
      }
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
      const arrBars = document.getElementsByClassName("array-bar");
      const [indexOne, indexTwo] = animations[i];
      if (indexOne === -1 && indexTwo === -1) continue;
      const barOneStyle = arrBars[indexOne].style;
      const barTwoStyle = arrBars[indexTwo].style;
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const color =
          i % 3 === 0 ? "rgba(30, 139, 195, 0.9)" : "rgba(0, 0, 0, 0.5)";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // If it's the swap
        setTimeout(() => {
          let heightOne = barOneStyle.height;
          let heightTwo = barTwoStyle.height;
          // Swap the values here
          barTwoStyle.height = `${heightOne}`;
          barOneStyle.height = `${heightTwo}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const resetArray = () => {
    const array = [];
    const width = window.innerWidth;
    const size = width / 6.8;
    for (let i = 0; i < size; i++) {
      array.push(getRandomInt(5, 730));
    }
    setBarsArray(array);
  };

  return (
    <>
      <SortingNavbar
        resetArray={resetArray}
        callMergesort={mergeSortFunc}
        callQuicksort={quickSortFunc}
        callBubblesort={bubbleSortFunc}
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
