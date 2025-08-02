'use client'

import { useLocalStorage } from "@/hook/useLocalStorage";
import ListTemplate from "@/components/templates/listTemplate";
import TableRow from "@/components/molecules/TableRow/TableRow";

export default function Session() {
  const [sessions, setSessions] = useLocalStorage<Session[]>("sessions", []);
  const [ressources, setRessources] = useLocalStorage<Ressource[]>("ressources", []);

  const deleteUserById = (id: number) => {
    setSessions(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  return (
    <ListTemplate
      pageTitle={"Mes sessions"} typeBloc={"session"}
      ressources={ressources}
      sessions={sessions} setSessions={setSessions}
    >
      {sessions && sessions.map((data: Session, index) => (
        <TableRow
          key={index}
          item={data}
          index={index}
          deleteAction={() => deleteUserById(data.id)}
          deleteConfirmationMessage="Êtes vous sur de vouloir supprimer cette session ?"
          viewPathPrefix="/session"
          renderCells={(session: Session) => (
            <>
              <td>{session.date}</td>
              <td>{session.podcast}</td>
              <td>{session.episode}</td>
              <td>{session.type}</td>
            </>
          )}
        />
      ))}
    </ListTemplate>
  );
}
