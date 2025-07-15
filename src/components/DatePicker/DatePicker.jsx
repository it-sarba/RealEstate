import React, { useState } from "react";
import "./DatePicker.css";

const DatePicker = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setShowCalendar(false);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const blanks = Array(firstDay).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const calendar = [...blanks, ...days];

    return (
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>&lt;</button>
          <span>{months[currentMonth]} {currentYear}</span>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="calendar-days">
          {daysOfWeek.map((d) => (
            <div key={d} className="day-label">{d}</div>
          ))}
          {calendar.map((day, idx) => (
            <div
              key={idx}
              className={`day-cell ${day && selectedDate?.getDate() === day &&
                selectedDate.getMonth() === currentMonth &&
                selectedDate.getFullYear() === currentYear
                ? "selected" : ""}`}
              onClick={() => day && handleDateClick(day)}
            >
              {day || ""}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString()
    : "";

  return (
    <div className="datepicker-wrapper">
      <input
        type="text"
        readOnly
        placeholder="Select date"
        value={formattedDate}
        onClick={() => setShowCalendar((prev) => !prev)}
        className="datepicker-input"
      />
      {showCalendar && renderCalendar()}
    </div>
  );
};

export default DatePicker;
