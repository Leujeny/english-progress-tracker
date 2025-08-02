'use client'
import { Dispatch, SetStateAction, useState } from "react"; import ButtonDialog from "../buttonDialog/buttonDialog";
import AddSessionForm from "@/components/organisms/form/addSessionForm";
import { useRouter } from "next/navigation";
import { transformerRessourcesEnOptions } from "@/utils/resourceUtils";
interface Props {
  sessions: Session[],
  setSessions: Dispatch<SetStateAction<Session[]>>
  ressources: Ressource[],
}

export default function AddSessionButtonModal({ sessions, setSessions, ressources }: Props) {

  const [episode, setEpisode] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState(15);
  const [understanding, setUnderstanding] = useState('');
  const [note, setNote] = useState('');
  const [podcast, setPodcast] = useState('');
  const router = useRouter();
  const id = Date.now();

  const listeOptions: Option[] = transformerRessourcesEnOptions(ressources);

  const addSession = () => {
    const newLevel: Session = {
      id: id,
      type: 'podcast',
      podcast: podcast,
      date: new Date().toISOString().split("T")[0],
      episode: episode,
      duration: duration,
      note: note
    };

    setSessions([...sessions, newLevel]),
      setEpisode(''),
      setDate(''),
      setDuration(15),
      setUnderstanding(''),
      setNote(''),
      setPodcast(''),
      router.push(`/session/${id}/update`)
  };


  return (
    <ButtonDialog title={"Ajouter une session"} btnAction={addSession} btnTitle={"Nouvelle session"} lableAction={"Add"}>
      <AddSessionForm
        date={date} setDate={setDate}
        episode={episode} setEpisode={setEpisode}
        duration={duration} setDuration={setDuration}
        // understanding={understanding} setUnderstanding={setUnderstanding}
        note={note} setNote={setNote}
        podcast={podcast} setPodcast={setPodcast}
        listeOptions={listeOptions}
      />
    </ButtonDialog>
  );

}
