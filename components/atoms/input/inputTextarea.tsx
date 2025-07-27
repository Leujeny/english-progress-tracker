import { Dispatch, SetStateAction } from "react";

interface Props {
    label: string,
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}

export default function InputTextarea({ value, setValue, label }: Props) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <textarea className="textarea h-24" placeholder="Bio" value={value} onChange={e => setValue(e.target.value)}></textarea>
        </fieldset>
    );
}