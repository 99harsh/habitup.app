"use client";

import "./TaskList.scss";

interface ITaskList{
    checked?:boolean
}

export default function TaskList({checked=false}:ITaskList){
    return (
        <div className={'hbup-tasklist-container flex gap-4'}>
            <input type="checkbox" className="hbup-task-checkbox m-0 p-0" defaultChecked={checked} />
            <div className="hbup-tasklist-info">
                <h3 className={`hbup-task m-0 font-md font-500 ${checked ? 'hbup-task-completed':''}`}>Figma Basics</h3>
                <p className="hbup-date m-0 font-sm font-400">Friday, 10 June 2024</p>
            </div>
        </div>
    )
}