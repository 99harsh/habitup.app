import "@/styles/components/_dashboardheader.scss";
import { BellDot } from 'lucide-react';
import Image from "next/image";

export default function DashboardHeader() {
    return (
        <section className="hbup-dashboard-header flex px-4 py-2">
            <div className="hbup-menu-container flex-1 flex align-items-center">
                <Image src={"/assets/icons/menu.svg"} width={25} height={25} alt="menu" />
            </div>
            <div className="flex flex-1 gap-3 justify-content-end align-items-center">
                <div className="hbup-notification-container p-1 flex">
                    <BellDot height={20} width={20} />
                </div>
                <div className="hbup-profile-info-container flex gap-2 align-items-center">
                    <div className="hbup-profile-icon-container">
                        <Image src={"/assets/icons/profile-icon.svg"} alt="User Profile" height={38} width={38} />
                    </div>
                    {/* <div className="hbup-profile-name-container">
                        <p className="hbup-profile-name m-0 font-sm font-500">Harsh Agrawal</p>
                        <p className="hbup-profile-xp m-0 text-right">10xp</p>
                    </div> */}
                </div>
                {/* <div>
                    <Image className="hbup-user-crown" src={"/assets/icons/level-icon.svg"} alt="Level Icon" height={30} width={30} />
                </div> */}
            </div>
        </section>
    )
}