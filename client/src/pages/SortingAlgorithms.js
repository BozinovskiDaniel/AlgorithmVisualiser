import React, { useState, useEffect } from "react";
import { mergeSort } from "../components/sortingAlgorithms/sortingAlgorithms";

function SortingAlgorithms() {
  const [barsArray, setBarsArray] = useState(null);
  useEffect(() => {
    const array = [];
    for (let i = 0; i < 200; i++) {
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

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 50; i++) {
      array.push(getRandomInt(5, 730));
    }
    setBarsArray(array);
  };

  return (
    <>
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
      <button onClick={() => resetArray()}>Generate New Array</button>
      <button onClick={() => mergeSortFunc()}>Merge Sort</button>
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
