import { Dispatch, SetStateAction } from "react";

interface Props {
    label: string,
    value: number,
    setValue: Dispatch<SetStateAction<number>>
}

export default function InputNumber({ value, setValue, label }: Props) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <input type="number" className="input" placeholder="Type here" value={value} onChange={e => setValue(parseInt(e.target.value))} />
        </fieldset>
    );
}
