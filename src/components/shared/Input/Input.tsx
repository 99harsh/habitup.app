"use client";

import { useState } from "react";
import "./Input.scss";
import { Eye, EyeOff } from "lucide-react";


export default function Input({ type, placeholder }: { type: string; placeholder: string }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            {type === "password" ? (
                <div className="hbup-input-container hbup-password-container flex">
                    <input className="hbup-input-box" type={showPassword ? "text" : "password"} placeholder={placeholder} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                        className="hbup-password-toggle flex align-items-center">
                        {showPassword ? <EyeOff color="rgba(77, 77, 77, 1)" size={16} /> : <Eye color="rgba(77, 77, 77, 1)" size={16} />}
                    </button>
                </div>
            ) : (
                <div className="hbup-input-container">
                    <input className="hbup-input-box" type={type} placeholder={placeholder} />
                </div>
            )}
        </>
    )
}