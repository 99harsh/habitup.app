"use client";

import DashboardHeader from "@/components/layout/DashboardHeader";
import SidePanel from "@/components/layout/Sidepanel";
import "./layout.module.scss";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="hbup-dashboard-container flex">
            <div className="hbup-dashboard-section">
                <SidePanel />
            </div>
            <div className="flex-1 hbup-dashboard-section hbup-dashboard-content-section">
                <div className="hbup-dashboard-header">
                    <DashboardHeader />
                </div>
                <div className="hbup-content-container p-4">
                    {children}
                </div>
            </div>
        </section>
        )
}