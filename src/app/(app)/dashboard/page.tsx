import "./dashboard.scss";
import Card from "@/components/shared/Card/Card";
import { Flame, Goal, Heart, Notebook, Trophy } from "lucide-react";
import TaskList from "@/components/shared/TaskList/TaskList";
import LeaderboardCard from "@/components/shared/LeaderboardCard/LeaderboardCard";
import Progress from "@/components/shared/Progress/Progress";
import Checkbox from "@/components/shared/Checkbox/Checkbox";
import Calendar from "@/components/shared/Calendar/Calendar";

export default function Dashboard() {
    return (
        <>
            <div className="hbup-greetings-container mb-4">
                <h1 className="hbup-greet-heading text-primary m-0 font-600 font-2xl">Good Morning Harsh 👋🏻</h1>
                <h3 className="hbup-greet-subheading m-0 font-300 font-sm">Ready to reflect and grow today?</h3>
            </div>
            <div className="hbup-layout-section flex gap-4">
                <Card className="flex-2 flex align-items-center gap-3">
                    <div className="hbup-stats-section flex gap-3">
                        <div className="hbup-streak-container">
                            <p className="m-0 hbup-total-streak font-3xl font-500 flex align-items-center justify-content-center">
                                21
                                <Flame color="#ffae00" width={30} height={30} /></p>
                            <p className="m-0 hbup-streak-heading font-400 mt-2">Day Streak</p>
                        </div>
                        <div className="hbup-streak-container">
                            <p className="m-0 hbup-total-streak font-3xl font-500 flex align-items-center justify-content-center">
                                30
                                <Flame color="#ffae00" width={30} height={30} /></p>
                            <p className="m-0 hbup-streak-heading font-400 mt-2">Best Overall</p>
                        </div>

                    </div>
                    <div className="hbup-stats-section grid grid-cols-2 gap-3">
                        <div className="hbup-stats-card flex-between p-2">
                            <div className="hbup-stats-info">
                                <p className="m-0 hbup-stats-heading font-xs font-400 mb-1">Self Reflection</p>
                                <p className="m-0 hbup-stats-value font-700">45</p>
                            </div>
                            <div className="hbup-stats-icon p-2 flex align-items-center">
                                <Trophy height={30} width={30} />
                            </div>
                        </div>
                        <div className="hbup-stats-card flex-between p-2">
                            <div className="hbup-stats-info">
                                <p className="m-0 hbup-stats-heading font-xs font-400 mb-1">Journal</p>
                                <p className="m-0 hbup-stats-value font-700">45</p>
                            </div>
                            <div className="hbup-stats-icon p-2 flex align-items-center">
                                <Notebook height={30} width={30} />
                            </div>
                        </div>
                        <div className="hbup-stats-card flex-between p-2">
                            <div className="hbup-stats-info">
                                <p className="m-0 hbup-stats-heading font-xs font-400 mb-1">Mood Logged</p>
                                <p className="m-0 hbup-stats-value font-700">20</p>
                            </div>
                            <div className="hbup-stats-icon p-2 flex align-items-center">
                                <Heart height={30} width={30} />
                            </div>
                        </div>
                        <div className="hbup-stats-card flex-between p-2">
                            <div className="hbup-stats-info">
                                <p className="m-0 hbup-stats-heading font-xs font-400 mb-1">Total Task</p>
                                <p className="m-0 hbup-stats-value font-700">10/20</p>
                            </div>
                            <div className="hbup-stats-icon p-2 flex align-items-center">
                                <Goal height={30} width={30} />
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="flex-1">
                    <h3 className="hbup-layout-heading mt-0 font-md font-600">Tasks</h3>
                    <div className="hbup-tasklist-container flex flex-col gap-3">
                        <TaskList />
                        <TaskList checked={true} />
                        <TaskList />

                    </div>
                </Card>
            </div>
            <div className="hbup-layout-section flex gap-4 mt-4">
                <Card className="flex-1">
                    <h3 className="hbup-layout-heading mt-0 font-md font-600">Leaderboard</h3>
                    <div className="hbup-leaderboard-container flex flex-col gap-2">
                        <LeaderboardCard />
                        <LeaderboardCard />
                        <LeaderboardCard />
                        <LeaderboardCard isCurrentUser={true} />
                    </div>
                </Card>
                <Card className="flex-1">
                    <h3 className="hbup-layout-heading mt-0 font-md font-600">Today's Activity</h3>
                    <div className="hbup-taskprogress-container flex gap-2 align-items-center">
                        <Progress progress={50} />
                        <span className="font-xs font-500">5/10</span>
                    </div>
                    <div className="hbup-task-container flex flex-col gap-4 mt-4">
                        <div className="hbup-task-item flex align-items-center gap-2">
                            <Checkbox isCircle={true} checked={true}/>
                            <p className="m-0 font-sm text-primary font-500 hbup-task-completed"> Daily Login</p>
                        </div>
                        <div className="hbup-task-item flex align-items-center gap-2">
                            <Checkbox isCircle={true} />
                            <p className="m-0 font-sm text-primary font-500 hbup-task"> Daily Reflection</p>
                        </div>
                        <div className="hbup-task-item flex align-items-center gap-2">
                            <Checkbox isCircle={true} />
                            <p className="m-0 font-sm text-primary font-500 hbup-task"> Mood Logged</p>
                        </div>
                        <div className="hbup-task-item flex align-items-center gap-2">
                            <Checkbox isCircle={true} />
                            <p className="m-0 font-sm text-primary font-500 hbup-task"> Daily Task</p>
                        </div>
                        <div className="hbup-task-item flex align-items-center gap-2">
                            <Checkbox isCircle={true} />
                            <p className="m-0 font-sm text-primary font-500 hbup-task"> Daily Journal</p>
                        </div>
                        
                    </div>
                </Card>
                <Card className="flex-1">
                    <h3 className="hbup-layout-heading mt-0 font-md font-600">Calendar</h3>
                    <div className="hbup-calendar-container">
                        <Calendar />
                    </div>
                </Card>
            </div>
        </>
    )
}

