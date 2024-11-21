
"use client"; 
import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [hydrated, setHydrated] = useState(false);
  const [date, setDate] = useState(new Date());
  const [hourFormat, setHourFormat] = useState("24");

  useEffect(() => {
    setHydrated(true); 
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  if (!hydrated) {
    return null; 
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formattedHours =
    hourFormat === "12" ? (hours % 12 === 0 ? 12 : hours % 12) : hours;
  const amPm = hourFormat === "12" ? (hours < 12 ? "AM" : "PM") : "";

  const handleHourFormatChange = (format: string) => {
    setHourFormat(format);
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(https://picsum.photos/200/301)" }}
    >
      <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8">
        <div className="text-6xl text-white font-bold">
          {formattedHours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")} {amPm}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className={`px-4 py-2 ${
              hourFormat === "12" ? "bg-gray-600" : "bg-gray-400"
            } text-white rounded-lg mr-2`}
            onClick={() => handleHourFormatChange("12")}
          >
            12 Hour
          </button>
          <button
            className={`px-4 py-2 ${
              hourFormat === "24" ? "bg-gray-600" : "bg-gray-400"
            } text-white rounded-lg`}
            onClick={() => handleHourFormatChange("24")}
          >
            24 Hour
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
