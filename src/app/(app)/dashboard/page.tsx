import "./dashboard.scss";
import Card from "@/components/shared/Card/Card";
import { Flame, Goal, Heart, Notebook, Sparkles, Trophy } from "lucide-react";
import TaskList from "@/components/shared/TaskList/TaskList";
import LeaderboardCard from "@/components/shared/LeaderboardCard/LeaderboardCard";
import Progress from "@/components/shared/Progress/Progress";
import Checkbox from "@/components/shared/Checkbox/Checkbox";
import Calendar from "@/components/shared/Calendar/Calendar";
import Input from "@/components/shared/Input/Input";
import { Button } from "@/components/shared/Button/Button";

export default function Dashboard() {
    return (
        <>
            <div className="hbup-greetings-container mb-4">
                <h1 className="hbup-greet-heading text-primary m-0 font-600 font-2xl">Good Morning Harsh 👋🏻</h1>
                <h3 className="hbup-greet-subheading m-0 font-300 font-sm">Ready to reflect and grow today?</h3>
            </div>
            <div className="hbup-layout-section hbup-stats-container flex gap-4">
                <Card className="flex-2 flex align-items-center gap-3 hbup-stats-layout">
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
                    <h3 className="hbup-layout-heading mt-0 font-xl font-600">Tasks</h3>
                    <div className="hbup-tasklist-container flex flex-col gap-3">
                        <TaskList />
                        <TaskList checked={true} />
                        <TaskList />

                    </div>
                </Card>
            </div>
            <div className="hbup-layout-section hbup-stats-container flex gap-4 mt-4">
                <Card className="flex-1">
                    <h3 className="hbup-layout-heading mt-0 font-xl font-600">Leaderboard</h3>
                    <div className="hbup-leaderboard-container flex flex-col gap-2">
                        <LeaderboardCard />
                        <LeaderboardCard />
                        <LeaderboardCard />
                        <LeaderboardCard isCurrentUser={true} />
                    </div>
                </Card>
                <Card className="flex-1">
                    <h3 className="hbup-layout-heading mt-0 font-xl font-600">Today's Activity</h3>
                    <div className="hbup-taskprogress-container flex gap-2 align-items-center">
                        <Progress progress={50} />
                        <span className="font-xs font-500">5/10</span>
                    </div>
                    <div className="hbup-task-container flex flex-col gap-4 mt-4">
                        <div className="hbup-task-item flex align-items-center gap-2">
                            <Checkbox isCircle={true} checked={true} />
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
                    <h3 className="hbup-layout-heading mt-0 font-xl font-600">Calendar</h3>
                    <div className="hbup-calendar-container">
                        {/* <Calendar /> */}
                    </div>
                </Card>
            </div>
            <div className="hbup-layout-section flex mt-4">
                <Card className="flex-1">
                    <div className="hbup-ai-container">
                        <h3 className="flex align-items-center gap-2 hbup-ai-heading justify-content-center font-xl mt-0 mb-2">
                            <Sparkles color="rgba(254, 199, 120, 1)" />
                            AI Summary
                        </h3>
                        <p className="font-400 font-lg m-0 text-center hbup-ai-subheading">Create AI summary from your recent reflection </p>
                    </div>
                    <div className="hbup-aiform-container flex gap-3 align-items-center mt-4">
                        <div className="flex-1">
                            <Input type="text" placeholder="Passkey - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
                        </div>
                        <div>
                            <Button buttonName="Generate"/>
                        </div>
                    </div>
                    <div className="hbup-aisummary-container">
                        <p className="hbup-aisummary-heading font-md">
                        Artificial Intelligence (AI) offers numerous advantages and has the potential to revolutionize various aspects of our lives. Here are some key advantages of AI:
                        </p>
                        <ol className="hbup-aisummary-list m-0 flex flex-col gap-6">
                            <li className="font-md font-400">Automation: AI can automate repetitive and mundane tasks, saving time and effort for humans. It can handle large volumes of data, perform complex calculations, and execute tasks with precision and consistency. This automation leads to increased productivity and efficiency in various industries.</li>
                            <li className="font-md font-400">Decision-making: AI systems can analyze vast amounts of data, identify patterns, and make informed decisions based on that analysis. This ability is particularly useful in complex scenarios where humans may struggle to process large datasets or where quick and accurate decisions are crucial.</li>
                            <li className="font-md font-400">Improved accuracy: AI algorithms can achieve high levels of accuracy and precision in tasks such as image recognition, natural language processing, and data analysis. They can eliminate human errors caused by fatigue, distractions, or bias, leading to more reliable and consistent results.</li>
                            <li className="font-md font-400">Continuous operation: AI systems can work tirelessly without the need for breaks, resulting in uninterrupted 24/7 operations. This capability is especially beneficial in applications like customer support chatbots, manufacturing processes, and surveillance systems.</li>
                        </ol>
                    </div>
                </Card>
            </div>
        </>
    )
}

