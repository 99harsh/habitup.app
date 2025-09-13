import Image from "next/image";
import "@/styles/components/_sidepanel.scss";
import { Calendar, ChartPie, Clipboard, Folder, Heart, Notebook, Settings } from "lucide-react";

export default function SidePanel(){
    return(
        <div className="hbup-sidepanel-container px-6 pt-3">
            <div className="hbup-logo-container flex align-items-center gap-3 pb-4">
                <Image src={"/assets/logos/logo.svg"} width={40} height={40} alt="Habitup Logo"/>
                <h1 className="hbup-appname m-0 font-xl">Habit<span className="hbup-up-heading">Up</span></h1>
            </div>
            <div className="hbup-menu-container flex flex-col gap-3 mt-8">
                <div className="hbup-menu-item hbup-menu-active flex align-items-center gap-3">
                    <ChartPie height={18} width={18} className="hbup-menu-icon"/>
                    <p className="hbup-menu-name font-sm m-0">Dashboard</p>
                </div>
                <div className="hbup-menu-item flex align-items-center gap-3">
                    <Notebook height={18} width={18} className="hbup-menu-icon"/>
                    <p className="hbup-menu-name font-sm m-0">Reflection</p>
                </div>
                <div className="hbup-menu-item flex align-items-center gap-3">
                    <Heart height={18} width={18} className="hbup-menu-icon"/>
                    <p className="hbup-menu-name font-sm m-0">Mood</p>
                </div>
                <div className="hbup-menu-item flex align-items-center gap-3">
                    <Clipboard height={18} width={18} className="hbup-menu-icon"/>
                    <p className="hbup-menu-name font-sm m-0">Task</p>
                </div>
                <div className="hbup-menu-item flex align-items-center gap-3">
                    <Folder height={18} width={18} className="hbup-menu-icon"/>
                    <p className="hbup-menu-name font-sm m-0">Journal</p>
                </div>
                <div className="hbup-menu-item flex align-items-center gap-3">
                    <Calendar height={18} width={18} className="hbup-menu-icon"/>
                    <p className="hbup-menu-name font-sm m-0">Calendar</p>
                </div>
                <div className="hbup-menu-item flex align-items-center gap-3">
                    <Settings height={18} width={18} className="hbup-menu-icon"/>
                    <p className="hbup-menu-name font-sm m-0">Settings</p>
                </div>
            </div>
        </div>
    )
}