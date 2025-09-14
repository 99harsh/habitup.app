"use client";

import { useState } from "react";
import "./CustomCalendar.scss";

type Event = {
    date: number;
    emoji: string;
    label: string;
    bg?: string;
};

export default function CustomCalendar() {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Sample events (replace with API/db data later)
    const events: Event[] = [
        { date: 2, emoji: "🌟", label: "Complete Day", bg: "#fef9c3" },
        { date: 3, emoji: "🔥", label: "Login", bg: "#fee2e2" },
        { date: 4, emoji: "📝", label: "Journal", bg: "#fefce8" },
        { date: 28, emoji: "🔥🙂📝🎯", label: "", bg: "#fef3c7" }
    ];

    const prevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const getEventForDay = (day: number) => {
        return events.find((e) => e.date === day);
    };

    return (
        <div className="calendar">
            {/* Header */}
            {/* <div className="calendar__header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{monthNames[month]} {year}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div> */}

            {/* Weekdays */}
            <div className="calendar__weekdays mb-4">
                {weekdays.map((day) => (
                    <div key={day} className="font-400 font-sm py-2 text-primary">{day}</div>
                ))}
            </div>

            {/* Days */}
            <div className="calendar__days">
                {/* empty slots before first day */}
                {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="calendar__day empty"></div>
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const event = getEventForDay(day);
                    const isToday =
                        day === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear();

                    return (
                        <div
                            key={day}
                            className={`calendar__day ${event ? "has-event" : ""} ${isToday ? "calendar__today" : ""}`}
                            style={{ background: event?.bg || "transparent" }}
                        >
                            <div className="day-number text-primary">{day}</div>
                            {event && (
                                <div className="event">
                                    <div className="emoji">{event.emoji}</div>
                                    {/* <div className="label">{event.label}</div> */}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
