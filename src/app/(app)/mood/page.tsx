import SectionDatePicker from "@/components/layout/SectionDatePicker";
import "./mood.scss";
import Card from "@/components/shared/Card/Card";
import MoodProgress from "@/components/shared/MoodProgress/MoodProgress";
import Image from "next/image";
import { Button } from "@/components/shared/Button/Button";

export default function Mood() {
    return (
        <div className="hbup-mood-container">
            <div className="hbup-mood-section">
                <SectionDatePicker subheading="Track your emotional journey with mindful awareness"/>
            </div>
            <div className="hbup-mood-section mt-4 flex gap-4">
                <Card className="flex-1">
                    <h3 className="text-center m-0 font-md font-600 font-xl">Your mood Today</h3>
                    <MoodProgress />
                    <h3 className="m-0 text-center text-primary font-md font-600">Happy 8/10</h3>
                    <p className="m-0 text-center text-grey font-sm font-400">Logged 6 mins ago</p>
                </Card>
                <Card className="flex-2">
                    <h3 className="text-center m-0 font-md font-600 font-xl">This week</h3>
                    <div className="flex align-items-center justify-content-center gap-4">
                        <div>
                            <h3 className="font-2xl">Average 8/10</h3>
                            <h3 className="font-2xl">Entries  95</h3>
                        </div>
                        <MoodProgress />
                    </div>
                    <div className="hbup-weekly-stats m-auto">
                        <div className="grid grid-cols-7 hbup-emoj-container px-4">
                            <div className="">
                                <Image src={"/assets/icons/angry.svg"} height={30} width={30} alt="angry emoj" />
                            </div>
                            <div className="">
                                <Image src={"/assets/icons/sad.svg"} height={30} width={30} alt="angry emoj" />
                            </div>
                            <div className="">
                                <Image src={"/assets/icons/neutral.svg"} height={30} width={30} alt="angry emoj" />
                            </div>
                            <div className="">
                                <Image src={"/assets/icons/happy.svg"} height={30} width={30} alt="angry emoj" />
                            </div>
                            <div className="">
                                {/* <Image src={"/assets/icons/angry.svg"} height={30} width={30} alt="angry emoj" /> */}
                            </div>
                            <div className="">
                                {/* <Image src={"/assets/icons/angry.svg"} height={30} width={30} alt="angry emoj" /> */}
                            </div>
                            <div className="">
                                {/* <Image src={"/assets/icons/angry.svg"} height={30} width={30} alt="angry emoj" /> */}
                            </div>
                        </div>
                        <Image src={'/assets/illustrations/cloud.svg'} width={100} height={100} alt="Cloud" className="hbup-week-cloud" />
                    </div>
                    <div className="hbup-weekly-stats mx-auto mt-4">
                        <div className="grid grid-cols-7 hbup-emoj-container px-4">
                            <div className="">
                                <p className="font-sm text-primary">Mon</p>
                            </div>
                            <div className="">
                                <p className="font-sm text-primary">Tue</p>
                            </div>
                            <div className="">
                                <p className="font-sm text-primary">Wed</p>
                            </div>
                            <div className="">
                                <p className="font-sm text-primary">Thu</p>
                            </div>
                            <div className="">
                                <p className="font-sm text-primary">Fri</p>
                            </div>
                            <div className="">
                                <p className="font-sm text-primary">Sat</p>
                            </div>
                            <div className="">
                                <p className="font-sm text-primary">Sun</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="hbup-mood-section mt-4 gap-2">
                <Card>
                    <h3 className="m-0 font-sm font-500 font-xl">
                        Log your Mood
                    </h3>
                    <p className="m-0 mb-2 font-md font-400 text-grey-dark">Pick the emoji that suits your mood</p>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="text-center">
                            <h1 className="m-0 font-6xl">😊</h1>
                            <h3 className="m-0 font-md text-primary">Happy</h3>
                        </div>
                        <div className="text-center">
                            <h1 className="m-0 font-6xl">😌</h1>
                            <h3 className="m-0 font-md text-primary">Peaceful</h3>
                        </div>
                        <div className="text-center">
                            <h1 className="m-0 font-6xl">😍</h1>
                            <h3 className="m-0 font-md text-primary">Exicted</h3>
                        </div>
                        <div className="text-center">
                            <h1 className="m-0 font-6xl">🤔</h1>
                            <h3 className="m-0 font-md text-primary">Thoughtful</h3>
                        </div>
                        <div className="text-center">
                            <h1 className="m-0 font-6xl">😔</h1>
                            <h3 className="m-0 font-md text-primary">Sad</h3>
                        </div>
                        <div className="text-center">
                            <h1 className="m-0 font-6xl">😤</h1>
                            <h3 className="m-0 font-md text-primary">Frustrated</h3>
                        </div>
                        <div className="text-center">
                            <h1 className="m-0 font-6xl">😴</h1>
                            <h3 className="m-0 font-md text-primary">Tired</h3>
                        </div>
                        <div className="text-center">
                            <h1 className="m-0 font-6xl">😰</h1>
                            <h3 className="m-0 font-md text-primary">Anxious</h3>
                        </div>
                    </div>
                    <div className="mt-2 hbup-submit-btn mx-auto mt-8">
                        <Button buttonName="Save" />
                    </div>
                </Card>
            </div>
        </div>
    )
}