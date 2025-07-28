import { Dispatch, SetStateAction } from "react";
import InputText from "../../atoms/input/inputText";
import InputTextarea from "../../atoms/input/inputTextarea";
import InputDate from "@/components/atoms/input/inputDate";
import InputNumber from "@/components/atoms/input/inputNumber";
import InputSelect from "@/components/atoms/input/inputSelect";
interface Props {
    date: string,
    setDate: Dispatch<SetStateAction<string>>,
    episode: string,
    setEpisode: Dispatch<SetStateAction<string>>,
    duration: number,
    setDuration: Dispatch<SetStateAction<number>>,
    // understanding: string,
    // setUnderstanding: Dispatch<SetStateAction<string>>,
    note: string,
    setNote: Dispatch<SetStateAction<string>>,
    podcast: string,
    setPodcast: Dispatch<SetStateAction<string>>,
    listeOptions: Option[]
}

export default function AddSessionForm({
    date, setDate,
    episode, setEpisode,
    duration, setDuration,
    // understanding, setUnderstanding,
    note, setNote,
    podcast, setPodcast,
    listeOptions

}: Props) {
    return (
        <>
            {/* <InputSelect options={typeOption} value={type} setValue={setType} label={"Type"} /> */}
            <InputSelect options={listeOptions} value={podcast} setValue={setPodcast} label={"podcast"} />
            <InputDate label={"Date"} value={date} setValue={setDate} />
            <InputText label={"Episode"} value={episode} setValue={setEpisode} />
            <InputNumber label={"Duration"} value={duration} setValue={setDuration} />
            
            {/* <InputRange label={"Understanding"} value={understanding} setValue={setUnderstanding} /> */}
            <InputTextarea label={"Notes"} value={note} setValue={setNote} />
        </>
    );
}
