'use client'
import { Dispatch, SetStateAction, useState } from "react"; import ButtonDialog from "../buttonDialog/buttonDialog";
import AddRessourceForm from "@/components/organisms/form/addRessourceForm";

interface Props {
  setRessources: Dispatch<SetStateAction<Ressource[]>>
  ressources: Ressource[],
}

export default function AddRessourceButtonModal({ ressources, setRessources }: Props) {

  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  const addRessource = () => {
    const newRessource: Ressource = {
      id: Date.now(),
      name: name,
      type: 'podcast',
      note: note
    };
    setRessources([...ressources, newRessource]);
    setName('')
    setNote('')
    // router.push(`/ressource/${id}/update`);
  };


  return (
    <ButtonDialog title={"Add a ressource"} btnAction={addRessource} btnTitle={"Nouvelle ressource"} lableAction={"Add"}>
      <AddRessourceForm note={note} setNote={setNote} name={name} setName={setName} />
    </ButtonDialog>
  );

}
