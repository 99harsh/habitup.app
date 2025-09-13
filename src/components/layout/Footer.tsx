import "@/styles/components/_footer.scss";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hbup-footer-container pt-8 mt-8">
            <div className="hbup-footer-appname flex gap-3 align-items-center">
                <Image priority src="/assets/logos/logo.svg" height={50} width={50} alt="Habitup Logo" />
                <h1 className="m-0 hbup-heading text-primary">Habit<span className="hbup-up-heading">Up</span></h1>
            </div>
            <div className="hbup-footer-nav-container grid grid-cols-3 mt-8">
                <div className="hbup-footer-section">
                    <p className="hbup-footer-content m-0">
                        Your free, private, and secure digital notebook. Create,
                        edit, and organize your notes & dairy on our powerful yet simple solution.
                    </p>
                </div>
                <div className="hbup-footer-section flex justify-content-center">
                    <ul className="hbup-footer-nav m-0 p-0">
                        <li>Privacy Policy</li>
                        <li>Terms of service</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="hbup-footer-section flex flex-col align-items-center">
                    <h4 className="hbup-connect-heading mt-0">Connect</h4>
                    <ul className="hbup-footer-nav m-0 p-0">
                        <li>Github</li>
                        <li>Twitter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            </div>
            <div className="hbup-copywrite-container">
                <p className="hbup-copywrite">© 2025 HabitUp • Crafted with ❤️ for mindful souls</p>
            </div>

        </footer>
    )
}