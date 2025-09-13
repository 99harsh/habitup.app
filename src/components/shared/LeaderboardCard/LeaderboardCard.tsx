import Image from "next/image";
import "./LeaderboardCard.scss";

interface ILeaderboardCard{
    isCurrentUser?: boolean;
}

export default function LeaderboardCard({isCurrentUser = false}:ILeaderboardCard){
    return(
        <div className={`hbup-leaderboard-card px-2 flex-between ${isCurrentUser ? 'hbup-leadboard-active': ""}`}>
            <div className="hbup-leadboard flex gap-2 align-items-center">
                <h3 className="hbup-rank font-sm font-500">1</h3>
                <Image src={"/assets/icons/leaderboard-user.svg"} height={30} width={30} alt="user icon"/>
                <h3 className="hbup-username font-sm font-500">{isCurrentUser ? 'You' : 'Marsha Fisher'}</h3>
            </div> 
            <div className="hbup-leaderboard">
                <h3 className="hbup-user-xp m-0 font-sm font-400">123 XP</h3>
            </div>
        </div>
    )
}