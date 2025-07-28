import { Dispatch, SetStateAction } from "react";

interface Props {
    label: string,
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}

export default function InputRange({ value, setValue, label }: Props) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <div className="w-full max-w-xs">
                <input type="range" min="1" max="10" className="range range-xs range-primary" step="1" value={value} onChange={e => setValue(e.target.value)} />
                <div className="flex justify-between px-2.5 mt-2 text-xs">
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                </div>
                <div className="flex justify-between px-2.5 mt-2 text-xs">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
            </div>
        </fieldset>
    );
}
