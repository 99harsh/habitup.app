"use client";

import Image from "next/image";
import "./MoodProgress.scss";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function MoodProgress() {
    return (
        <div className="hbup-mood-progress">
            <div className="hbup-progress mx-auto my-3">
                <CircularProgressbarWithChildren
                    value={66}
                    className="hbup-circle-progress"
                    styles={buildStyles({
                        pathColor: "rgba(255, 181, 76, 1)",
                        trailColor: "rgba(248, 229, 202, 1)",
                    })}
                >
                <Image src={'/assets/icons/happy.svg'} height={150} width={150} alt="happy emoj" className="hbup-progress-emoj"/>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    )
}