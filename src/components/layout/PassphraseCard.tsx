import "@/styles/components/_passphrasecard.scss";
import Card from "../shared/Card/Card";
import { Book, BookOpen, Info } from "lucide-react";
import Input from "../shared/Input/Input";
import { Button } from "../shared/Button/Button";

export default function PassphraseCard() {
    return (
        <Card>
            <h3 className="m-0 flex gap-2 align-items-center justify-content-center font-xl hbup-passphrase-heading">
                <BookOpen width={25} height={25} />
                Your Thoughts
            </h3>
            <p className="text-center mt-2 text-grey-dark">
                For security reasons, Please set a passphrase
            </p>
            <div className="flex justify-content-center">
                <p className="flex gap-2 justify-content-center hbup-privacy-container mt-0 text-grey-dark font-sm">
                    <Info width={30} height={30} color="rgba(253, 205, 15, 1)" />
                    For your privacy, your passphrase is never stored with us. This means only you can unlock your entry. If you forget it, not one (including us) can recover it.
                </p>
            </div>
            <div className="flex gap-2 align-items-center">
                <div className="flex-1">
                    <Input type="text" placeholder="passkey - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
                </div>
                <div>
                    <Button buttonName="Unlock" />
                </div>
            </div>
        </Card>
    )
}