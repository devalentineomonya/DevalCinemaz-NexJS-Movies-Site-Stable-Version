"use client"
import React from "react";

const DisplayError = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[75vh] bg-customWhite dark:bg-customDark pt[65px]">
      <h2 className="text-4xl font-bold text-red-500 mb-4">
        An Error Occurred
      </h2>
      <p className="text-lg dark:text-gray-100 text-gray-600 mb-8">{message}</p>
      <p className="text-lg dark:text-gray-100 text-gray-600 mb-8">
        Try Reloading the application
      </p>
      <button onClick={()=>location.reload()}>
        <span className="text-lg text-blue-500 hover:underline">Reload</span>
      </button>
    </div>
  );
};

export default DisplayError;
