import { Dispatch, SetStateAction } from "react";
import InputText from "../../atoms/input/inputText";
import InputTextarea from "../../atoms/input/inputTextarea";

interface Props {
    name: string, 
    setName: Dispatch<SetStateAction<string>>,
    note: string,
    setNote: Dispatch<SetStateAction<string>>
}

export default function AddRessourceForm({ name, setName, note, setNote }: Props) {
    return (
        <>
            <InputText label={"Name"} value={name} setValue={setName} />
            {/* <InputSelect options={difficultyOption} value={difficulty} setValue={setDifficulty} label={"Difficulty"} /> */}
            <InputTextarea label={"Notes"} value={note} setValue={setNote} />
        </>
    );
}
