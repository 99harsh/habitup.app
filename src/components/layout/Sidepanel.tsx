"use client";

import Image from "next/image";
import "@/styles/components/_sidepanel.scss";
import { Calendar, ChartPie, Clipboard, Folder, Heart, Notebook, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SidePanel(){
    const navItems = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: ChartPie 
        },
        {
            name: "Reflection",
            href: "/reflection",
            icon: Notebook
        },
        {
            name: "Journal",
            href: "/journal",
            icon: Folder
        },
        {
            name: "Mood",
            href: "/mood",
            icon: Heart
        },
        {
            name: "Task",
            href: '/task',
            icon: Clipboard
        },
        {
            name: "Calendar",
            href: '/calendar',
            icon: Calendar
        },
        {
            name: "Profile",
            href: '/profile',
            icon: Settings
        }
       
    ];

    const pathname = usePathname();

    return(
        <div className="hbup-sidepanel-container px-4 pt-3">
            <div className="hbup-logo-container flex align-items-center gap-3 pb-4">
                <Image src={"/assets/logos/logo.svg"} width={40} height={40} alt="Habitup Logo"/>
                <h1 className="hbup-appname m-0 font-xl">Habit<span className="hbup-up-heading">Up</span></h1>
            </div>
            <div className="hbup-menu-container flex flex-col gap-3 mt-4">
                {
                    navItems.map((element, index) => {
                        const isActive = pathname.startsWith(element.href);
                        const Icon = element.icon;
                        return (
                        <Link key={index} className={`hbup-menu-item flex align-items-center hbup-menu-name font-md m-0 gap-3 ${isActive ? 'hbup-menu-active' : ''}`} href={element.href}>
                            <Icon height={18} width={18} className="hbup-menu-icon"/>
                            {element.name}
                        </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}