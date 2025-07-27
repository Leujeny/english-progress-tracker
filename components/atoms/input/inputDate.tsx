import { Dispatch, SetStateAction } from "react";

interface Props {
    label: string,
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}

export default function InputDate({ value, setValue, label }: Props) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <input type="date" className="input" placeholder="Type here" value={value} onChange={e => setValue(e.target.value)} />
        </fieldset>
    );
}
