import CustomCalendar from "@/components/shared/CustomCalendar/CustomCalendar";
import "./calendar.scss";
import SectionDatePicker from "@/components/layout/SectionDatePicker";
import Card from "@/components/shared/Card/Card";

export default function Calendar() {
    return (
        <div className="hbup-calendar-container">
            <div className="hbup-calendar-section">
                <h3 className="m-0 font-lg text-primary">Calendar & Streaks</h3>
                <p className="m-0 font-sm text-grey">Track your consistency and celebrate your progress</p>
            </div>
            <div className="hbup-calendar-section mt-4 flex">
                <div className="flex-1 flex">
                    <SectionDatePicker />
                </div>
                <Card className="hbup-calendar-legend justify-content-end flex gap-4">
                    <p className="font-sm m-0">🔥 Daily Login</p>
                    <p className="font-sm m-0">📝 Journal</p>
                    <p className="font-sm m-0">😊 Reflection</p>
                    <p className="font-sm m-0">❤️ Mood</p>
                    <p className="font-sm m-0">🎯 Task</p>
                    <p className="font-sm m-0">🌟 Complete Day</p>
                </Card>
            </div>
            <div className="hbup-calendar-section mt-4">
                <CustomCalendar />
            </div>
        </div>
    )
}