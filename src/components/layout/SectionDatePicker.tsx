import "@/styles/components/_sectiondatepicker.scss";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";
import { Button } from "../shared/Button/Button";

interface ISelectionDatePicker {
    subheading?: string
}

export default function SectionDatePicker({subheading}: ISelectionDatePicker) {
    return (
        <>
            <div className="hbup-datepicker-container flex gap-3 align-items-center">
                <h3 className="m-0 hbup-selected-date">
                    13 Sept 2025
                </h3>
                <div className="flex gap-2">
                    <button className="hbup-arrow-btn">
                        <ArrowLeftIcon color="rgba(255, 181, 76, 1)" />
                    </button>
                    <Button buttonName="Today" />
                    <button className="hbup-arrow-btn">
                        <ArrowRight color="rgba(255, 181, 76, 1)" />
                    </button>
                </div>
            </div>
            <div className="mt-3">
                <h3 className="font-400 font-lg m-0 text-grey-dark hbup-datepicker-heading">{subheading}</h3>
            </div>
        </>
    )
}