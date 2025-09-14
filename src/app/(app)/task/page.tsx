"use client";
import Card from "@/components/shared/Card/Card";
import "./task.scss";
import Input from "@/components/shared/Input/Input";
import { Button } from "@/components/shared/Button/Button";
import TaskList from "@/components/shared/TaskList/TaskList";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



export default function Task() {
    return (
        <div className="hbup-task-container">
            <div className="hbup-task-section">
                <h3 className="m-0 font-xl text-primary">Your Task</h3>
                <p className="m-0 font-md text-grey-dark">Stay organized and accomplish your goals</p>
            </div>
            <div className="hbup-task-section flex gap-4 mt-4 hbup-task-card">
                <Card className="flex-2">
                    <div className="flex gap-3 align-items-center">
                        <div className="flex-1">
                            <Input type="text" placeholder="Enter task here" />
                        </div>
                        <div>
                            <Button buttonName="Add" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="hbup-task-item flex-between">
                            <TaskList checked={true} />
                            <button className="hbup-remove-btn font-sm">Remove</button>
                        </div>
                        <div className="hbup-task-item flex-between">
                            <TaskList checked={false} />
                            <button className="hbup-remove-btn font-sm">Remove</button>
                        </div>
                        <div className="hbup-task-item flex-between">
                            <TaskList checked={false} />
                            <button className="hbup-remove-btn font-sm">Remove</button>
                        </div>
                        <div className="hbup-task-item flex-between">
                            <TaskList checked={false} />
                            <button className="hbup-remove-btn font-sm">Remove</button>
                        </div>
                    </div>
                </Card>
                <Card className="flex-1 flex flex-col flex-around">
                    <div className="flex align-items-center justify-content-center gap-6">
                        <div className="text-center">
                            <h3 className="m-0 font-lg">Today so far</h3>
                            <p className="mt-4 mb-1 font-md">1/5</p>
                            <p className="m-0 font-md">task remaining</p>
                        </div>
                        <div className="hbup-progress-container">
                            <CircularProgressbar
                                value={66}
                                text="66%"
                                styles={buildStyles({
                                    textColor: "rgba(255, 181, 76, 1)",
                                    pathColor: "rgba(255, 181, 76, 1)",
                                    trailColor: "rgba(248, 229, 202, 1)",
                                })}
                            />
                        </div>
                    </div>
                    <div className="flex align-items-center justify-content-center gap-6 mt-4">
                        <div className="text-center">
                            <h3 className="m-0 font-lg">This week</h3>
                            <p className="mt-4 mb-1 font-md">1/5</p>
                            <p className="m-0 font-mdd">task remaining</p>
                        </div>
                        <div className="hbup-progress-container">
                            <CircularProgressbar
                                value={66}
                                text="66%"
                                styles={buildStyles({
                                    textColor: "rgba(255, 181, 76, 1)",
                                    pathColor: "rgba(255, 181, 76, 1)",
                                    trailColor: "rgba(248, 229, 202, 1)",
                                })}
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}