import SectionDatePicker from "@/components/layout/SectionDatePicker";
import "./reflection.scss";
import Card from "@/components/shared/Card/Card";
import PassphraseCard from "@/components/layout/PassphraseCard";
import Editor from "@/components/shared/Editor/Editor";

export default function Reflection() {
    return (
        <div className="hbup-reflection-container">
            <div>
            <SectionDatePicker subheading="Take a moment to reflect on your day" />
            </div>
            {/* <div className="hbup-reflection-section mt-4">
            <PassphraseCard /> 
        </div> */}
            <div className="hbup-reflection-section mt-4">
                <Card>
                    <h3 className="m-0 font-xl font-500 text-primary">Reflection Prompts</h3>
                    <div className="grid grid-cols-3 gap-2 mt-4 hbup-prompt-container">
                        <button className="hbup-reflection-prompt font-sm px-3 py-2">What made me feel happy today?</button>
                        <button className="hbup-reflection-prompt font-sm px-3 py-2">What made me feel happy today?</button>
                        <button className="hbup-reflection-prompt font-sm px-3 py-2">What made me feel happy today?</button>
                        <button className="hbup-reflection-prompt font-sm px-3 py-2">What made me feel happy today?</button>
                        <button className="hbup-reflection-prompt font-sm px-3 py-2">What made me feel happy today?</button>
                        <button className="hbup-reflection-prompt font-sm px-3 py-2">What made me feel happy today?</button>
                    </div>
                </Card>
            </div>
            <div className="hbup-reflection-section mt-4">
                <Card>
                    <Editor />
                </Card>
            </div>
        </div>
    )
}