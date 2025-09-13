import "./Progress.scss";

export default function Progress({progress}:any){
    return (
        <div className="hbup-progress-container">
            <div className="hbup-progressbar" style={{width: `${progress}%`}}></div>
        </div>
    )
}