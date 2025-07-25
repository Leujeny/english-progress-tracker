'use client'
import { SetStateAction, useRef, useState } from "react";
import InputSelect from "../input/inputSelect";
import InputText from "../input/inputText";
import InputDate from "../input/inputDate";
import ButtonDialog from "../buttonDialog";
import InputRange from "../input/inputRange";
import InputTextarea from "../input/inputTextarea";

interface Props {
}

const typeOption: Option[] = [{ value: 'podcast', label: 'Podcast' }, { value: 'text', label: 'Text' }, { value: 'video', label: 'Video' }]
const difficultyOption: Option[] = [{ value: 'easy', label: 'Easy' }, { value: 'medium', label: 'Medium' }, { value: 'hard', label: 'Hard' }]

export default function AddSessionButtonModal({ }: Props) {

  const modalRef = useRef<HTMLDialogElement>(null);
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [episode, setEpisode] = useState('');
  const [date, setDate] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [understanding, setUnderstanding] = useState('');
  const [note, setNote] = useState('');

  return (
    <div className="navbar-end">
      <ButtonDialog title={"Add a session"}>
        <InputSelect options={typeOption} value={type} setValue={setType} />
        <InputSelect options={typeOption} value={name} setValue={setName} />
        <InputText label={"Episode"} value={episode} setValue={setEpisode} />
        <InputDate label={"Date"} value={date} setValue={setDate} />
        <InputSelect options={difficultyOption} value={difficulty} setValue={setDifficulty} />
        <InputRange label={"Understanding"} value={understanding} setValue={setUnderstanding} />
        <InputTextarea label={"Notes"} value={note} setValue={setNote} />
      </ButtonDialog>
    </div>
  );

}
