'use client'

import InputText from "@/components/atoms/input/inputText";
import InputTextarea from "@/components/atoms/input/inputTextarea";
import { useLocalStorage } from "@/hook/useLocalStorage";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RessourceSession() {
  const { ressource_id } = useParams();
  const router = useRouter();
  const [ressources, setRessources] = useLocalStorage<Ressource[]>("ressources", []);
  const [ressource, setRessource] = useState<Ressource>();

  // const listeOptions: Option[] = transformerRessourcesEnOptions(ressources);

  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const getUserById = (id: number) => {
    return ressources.find(res => res.id === id);
  };

  useEffect(() => {
    if (typeof ressource_id === 'string') {
      setRessource(getUserById(parseInt(ressource_id)));
    }
  }, [ressources]);

  useEffect(() => {
    if (ressource?.id) {
      setName(ressource.name);
      setType(ressource.type);
      if (ressource.note) { setNote(ressource.note); }
    }
  }, [ressource]);

  const addSession = () => {
    if (ressource?.id) {
      const updatedRessource: Ressource = {
        id: ressource.id,
        type: 'podcast',
        name: name,
        note: note,

      };
      const updatedRessources = ressources.map(s =>
        s.id === ressource.id ? updatedRessource : s
      );

      setRessources(updatedRessources);
      router.back()
      // router.push(`/session/${id}/update`);
    }
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Update the ressource</h2>
        <InputText label={"Name"} value={name} setValue={setName} />
        <InputTextarea label={"Note"} value={note} setValue={setNote} />
        <button onClick={addSession} className="btn btn-primary rounded-sm me-4  mt-4 w-36">Update</button>
      </div>
    </div>
  );
}
