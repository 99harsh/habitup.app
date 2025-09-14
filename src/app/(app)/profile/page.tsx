import Card from "@/components/shared/Card/Card";
import "./profile.scss";
import Image from "next/image";
import Progress from "@/components/shared/Progress/Progress";
import LeaderboardCard from "@/components/shared/LeaderboardCard/LeaderboardCard";

export default function Profile() {
    return (
        <div className="hbup-profile-container">
            <Card className="hbup-profile-section flex">
                <div className="hbup-profile-details flex flex-col align-items-center flex-1">
                    <Image src="/assets/icons/profile-large.svg" width={150} height={150} alt="user-profile" />
                    <h3 className="font-2xl mb-0">Peter Parker</h3>
                    <p className="mt-1 mb-0">peterparker@spiderman.com</p>
                    <p>Joined: Sept 25</p>
                    <div className="flex gap-2 hbup-profile-progress">
                        <Progress progress={80} />
                        <p className="m-0 font-xs">10xp</p>
                    </div>
                </div>
                <div className="hbup-profile-stats flex-2 grid grid-cols-3 gap-4">
                    <Card className="flex flex-1 justify-content-center flex-col gap-2 text-center">
                        <h3 className="font-3xl m-0 hbup-stats">405</h3>
                        <p className="font-md m-0 font-500">XP</p>
                    </Card>
                    <Card className="flex flex-1 justify-content-center flex-col gap-2 text-center">
                        <h3 className="font-3xl m-0 hbup-stats">50</h3>
                        <p className="font-md m-0 font-500">Highest Streak</p>
                    </Card>
                    <Card className="flex flex-1 justify-content-center flex-col gap-2 text-center">
                        <h3 className="font-3xl m-0 hbup-stats">15</h3>
                        <p className="font-md m-0 font-500">Reflections</p>
                    </Card>
                    <Card className="flex flex-1 justify-content-center flex-col gap-2 text-center">
                        <h3 className="font-3xl m-0 hbup-stats">20</h3>
                        <p className="font-md m-0 font-500">Journals</p>
                    </Card>
                    <Card className="flex flex-1 justify-content-center flex-col gap-2 text-center">
                        <h3 className="font-3xl m-0 hbup-stats">20</h3>
                        <p className="font-md m-0 font-500">Mood</p>
                    </Card>
                    <Card className="flex flex-1 justify-content-center flex-col gap-2 text-center">
                        <h3 className="font-3xl m-0 hbup-stats">55</h3>
                        <p className="font-md m-0 font-500">Tasks</p>
                    </Card>
                </div>
            </Card>

            <div className="hbup-profile-section flex gap-3 mt-4">
                <Card className="flex-2">
                    <h3 className="m-0 font-sm font-600 text-primary">Leaderboard</h3>
                    <div className="flex flex-col gap-1 mt-4">
                        <LeaderboardCard />
                        <LeaderboardCard />
                        <LeaderboardCard />
                        <LeaderboardCard isCurrentUser={true}/>
                    </div>
                </Card>
                <Card className="flex-1">
                <h3 className="m-0 font-sm font-600 text-primary">Calendar</h3>
                </Card>
            </div>
        </div>
    )
}