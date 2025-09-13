import Image from "next/image"
import "./Login.scss";
import Input from "@/components/shared/Input/Input";
import Toggle from "@/components/shared/Toggle/Toggle";
import Link from "next/link";
import { Button } from "@/components/shared/Button/Button";
export default function Login() {
    return (
        <section className="hbup-auth-container grid grid-cols-2">
            <div className="hbup-auth-section">
                <Image src="/assets/illustrations/auth.svg" height={100} width={100} alt="Auth Image" className="hbup-auth-illustration" />
            </div>
            <div className="hbup-auth-section p-8">
                <div className="hbup-logo-container flex gap-3 align-items-center justify-content-center my-8">
                    <Image src="/assets/logos/logo.svg" width={70} height={70} alt="App Logo" />
                    <h1 className="hbup-appname text-primary">Habit<span className="hbup-up-heading">Up</span></h1>
                </div>
                <div className="hbup-form-container m-auto">
                    <div className="hbup-form-section">
                        <h3 className="hbup-form-heading">Nice to see you again</h3>
                    </div>
                    <div className="hbup-form-section hbup-input-container mb-4">
                        <Input type="text" placeholder="Enter email" />
                    </div>
                    <div className="hbup-form-section hbup-input-container mb-4">
                        <Input type="password" placeholder="Enter password" />
                    </div>
                    <div className="hbup-form-section hbup-input-container flex-between mb-4">
                        <div className="hbup-remember-section flex gap-3">
                            <Toggle />
                            <p className="m-0 font-400 font-sm text-primary hbup-remember-text">Remember me</p>
                        </div>
                        <div className="hbup-remember-section">
                            <Link href={"/forgot"} className="hbup-forgotpass-link m-0 font-500 font-sm">
                                Forgot Password?
                            </Link>
                        </div>
                    </div>
                    <div className="hbup-form-section hbup-signin-container mb-4">
                        <div className="hbup-btn-container m-auto">
                            <Button />
                        </div>
                    </div>
                    <div className="hbup-form-section hbup-newaccount-container mb-4 text-center">
                        <Link className="hbup-newaccount-link font-sm" href={"/register"}>Register new account</Link>
                    </div>
                    <div className="hbup-form-section hbup-google-container mb-4 mt-8">
                        <div className="hbup-btn-container m-auto">
                            <button className="hbup-googlelogin-container flex gap-2 justify-content-center align-items-center">
                                <Image src={"/assets/illustrations/google.svg"} width={20} height={20} alt="google icon" />
                                Continue with Google
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hbup-whylogin-container pt-8 flex flex-col gap-3">
                    <div className="hbup-whylogin-item flex gap-2 align-items-center">
                        <Image src={"/assets/icons/check-circle.svg"} width={20} height={20} alt="Check Icon"/>
                        <p className="hbup-whylogin-content m-0 font-sm">Securely save your data</p>
                    </div>
                    <div className="hbup-whylogin-item flex gap-2 align-items-center">
                        <Image src={"/assets/icons/check-circle.svg"} width={20} height={20} alt="Check Icon"/>
                        <p className="hbup-whylogin-content m-0 font-sm">Never lose your entries</p>
                    </div>
                    <div className="hbup-whylogin-item flex gap-2 align-items-center">
                        <Image src={"/assets/icons/check-circle.svg"} width={20} height={20} alt="Check Icon"/>
                        <p className="hbup-whylogin-content m-0 font-sm">Access your insights anywhere</p>
                    </div>
                    <div className="hbup-whylogin-item flex gap-2 align-items-center">
                        <Image src={"/assets/icons/check-circle.svg"} width={20} height={20} alt="Check Icon"/>
                        <p className="hbup-whylogin-content m-0 font-sm">100% Free</p>
                    </div>
                </div>
                <div className="hbup-copywrite-container text-center mt-8">
                    <p className="hbup-copywrite-text font-sm font-weight-300">&copy; 2025 HabitUp</p>
                </div>
            </div>
        </section>
    )
}