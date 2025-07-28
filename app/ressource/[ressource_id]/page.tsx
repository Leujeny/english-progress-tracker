'use client'

import { useLocalStorage } from "@/hook/useLocalStorage";
import { useParams } from "next/navigation";
import ViewTemplate from "@/components/templates/viewTemplate";

export default function ViewRessource() {
  const { ressource_id } = useParams();
  const [sessions, setSessions] = useLocalStorage<Session[]>("sessions", []);
  const [ressources, setRessources] = useLocalStorage<Ressource[]>("ressources", []);

  return (
    <ViewTemplate ressources={ressources} setRessources={setRessources} sessions={sessions} ressource_id={ressource_id}/>
  );
}
