import { useState } from "react";
import "./Calendar.scss";
import {Calendar as RCalendar} from "react-calendar";

export default function Calendar() {
    const [value, setValue] = useState(new Date());
    // Example streak days (replace with your logic)
    const streakDays = [
        "2025-09-09",
        "2025-09-10",
        "2025-09-11",
        "2025-09-12",
        "2025-09-13",
        "2025-09-14",
        "2025-09-15",
        "2025-09-22",
        "2025-09-23",
    ];

    //comment here

    const formatDate = (date:any) => date.toISOString().split("T")[0];
    return (
        <RCalendar
            onChange={setValue}
            value={value}
            tileClassName={({ date }) => {
                const dateStr = formatDate(date);

                if (streakDays.includes(dateStr)) {
                    return "streak-day"; // 🔥
                }

                return null;
            }}
            tileContent={({ date }) => {
                const dateStr = formatDate(date);

                if (streakDays.includes(dateStr)) {
                    return <span className="fire-icon">🔥</span>;
                }

                return null;
            }}
        />
    )
}