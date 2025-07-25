import { Dispatch, SetStateAction } from "react";

interface Props {
    options: Option[],
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}

export default function InputSelect({ value, setValue, options }: Props) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Type</legend>
            <select value={value} onChange={e => setValue(e.target.value)} className="select">
                <option value='' disabled={true}>Pick a type</option>
                {options?.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </fieldset>
    );
}
