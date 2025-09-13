import "./Checkbox.scss";

interface ICheckbox{
    checked?: boolean,
    isCircle?: boolean
}

export default function Checkbox({checked, isCircle}:ICheckbox){
    return (
        <input type="checkbox" className={`hbup-task-checkbox m-0 p-0 ${isCircle ? 'hbup-checkbox-circle': ''}`} defaultChecked={checked} />
    )
}