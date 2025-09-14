import "./Button.scss";

interface IButton{
    buttonName: string
}

export const Button = ({buttonName}: IButton) => {
    return (
        <button className="hbup-primary-btn font-sm">
            {buttonName}
        </button>
    )
}