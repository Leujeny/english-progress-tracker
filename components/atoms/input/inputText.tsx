import { Dispatch, SetStateAction } from "react";

interface Props {
    label: string,
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}

export default function InputText({ value, setValue, label }: Props) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <input type="text" className="input" placeholder="Type here" value={value} onChange={e => setValue(e.target.value)} />
        </fieldset>
    );
}
