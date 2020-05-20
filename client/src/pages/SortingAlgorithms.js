import React, { useState, useEffect } from "react";
import { mergeSort } from "../components/sortingAlgorithms/mergeSort";
import { quickSort } from "../components/sortingAlgorithms/quickSort";
import SortingNavbar from "../components/layout/SortingNavbar";

function SortingAlgorithms() {
  const [barsArray, setBarsArray] = useState(null);
  useEffect(() => {
    const array = [];
    const width = window.innerWidth;
    const size = width / 5.5;
    for (let i = 0; i < size; i++) {
      array.push(getRandomInt(5, 730));
    }
    setBarsArray(array);
  }, []);

  const mergeSortFunc = () => {
    // const jsSortedArr = barsArray.sort(function (a, b) {
    //   return a - b;
    // });
    // const myArr = mergeSort(barsArray);
    // console.log(areArraysEqual(jsSortedArr, myArr));
    setBarsArray(mergeSort(barsArray));
  };

  const quickSortFunc = () => {
    const sorted = quickSort(barsArray, 0, barsArray.length - 1);
    console.log(sorted);
    console.log(barsArray);
    setBarsArray(sorted);
  };

  const resetArray = () => {
    const array = [];
    const width = window.innerWidth;
    const size = width / 5.5;
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
