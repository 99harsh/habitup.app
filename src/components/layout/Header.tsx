import "@/styles/components/_header.scss";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="hbup-header grid grid-cols-2">
            <div className="hbup-header-section flex gap-3 align-items-center">
                <Image priority src="/assets/logos/logo.svg" height={50} width={50} alt="Habitup Logo" />
                <h1 className="m-0 hbup-heading text-primary">Habit<span className="hbup-up-heading">Up</span></h1>
            </div>
            <div className="hbup-header-section flex align-items-center justify-content-end hbup-header-nav-section">
                <ul className="hbup-nav m-0 flex gap-8 align-items-center">
                    <li className="hbup-nav-item">Features</li>
                    <li className="hbup-nav-item">How it works</li>
                    <li className="hbup-nav-item">
                        <button className="hbup-join-btn">Join Us</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}