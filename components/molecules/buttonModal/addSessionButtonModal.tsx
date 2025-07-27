'use client'
import InputDate from "@/components/atoms/input/inputDate";
import InputRange from "@/components/atoms/input/inputRange";
import InputSelect from "@/components/atoms/input/inputSelect";
import InputText from "@/components/atoms/input/inputText";
import InputTextarea from "@/components/atoms/input/inputTextarea";
import { Dispatch, SetStateAction, useState } from "react";import ButtonDialog from "../buttonDialog/buttonDialog";
;

interface Props {
  sessions: Session[],
  setSessions: Dispatch<SetStateAction<Session[]>>
}

const typeOption: Option[] = [{ value: 'podcast', label: 'Podcast' }, { value: 'text', label: 'Text' }, { value: 'video', label: 'Video' }]
const difficultyOption: Option[] = [{ value: 'easy', label: 'Easy' }, { value: 'medium', label: 'Medium' }, { value: 'hard', label: 'Hard' }]
const ressourceNameOption: Option[] = [{ value: 'jma', label: 'Jameliore mon anglais' }, { value: 'bbcl', label: 'BBC learning english' }, { value: 'Andy-english', label: 'Andy English' }]

export default function AddSessionButtonModal({ sessions, setSessions }: Props) {

  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [episode, setEpisode] = useState('');
  const [date, setDate] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [understanding, setUnderstanding] = useState('');
  const [note, setNote] = useState('');

  const addSession = () => {
    const newLevel: Session = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      name: name,
      type: type,
    };
    setSessions([...sessions, newLevel]);
  };


  return (
    <ButtonDialog title={"Add a session"} btnAction={addSession} btnTitle={"New session"}>
      <InputSelect options={typeOption} value={type} setValue={setType} label={"Type"} />
      <InputSelect options={ressourceNameOption} value={name} setValue={setName} label={"Name"} />
      <InputText label={"Episode"} value={episode} setValue={setEpisode} />
      <InputDate label={"Date"} value={date} setValue={setDate} />
      <InputSelect options={difficultyOption} value={difficulty} setValue={setDifficulty} label={"Difficulty"} />
      <InputRange label={"Understanding"} value={understanding} setValue={setUnderstanding} />
      <InputTextarea label={"Notes"} value={note} setValue={setNote} />
    </ButtonDialog>
  );

}
