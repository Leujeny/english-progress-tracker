'use client'

import { useLocalStorage } from "@/hook/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import IconButtonDialog from "@/components/molecules/buttonDialog/IconbuttonDialog";
import ListTemplate from "@/components/templates/listTemplate";
import TableRow from "@/components/molecules/TableRow/TableRow";

export default function Ressource() {
  const [ressources, setRessources] = useLocalStorage<Ressource[]>("ressources", []);
  const [name, setName] = useState<string>('');
  const [note, setNote] = useState<string>('');

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
  };

  const getUserById = (id: number) => {
    return ressources.find(ressource => ressource.id === id);
  };

  const deleteUserById = (id: number) => {
    setRessources(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  const updateTask = (updatedTask: Ressource) => {
    setRessources(prevTasks =>
      prevTasks.map(task =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  };

  return (
    <ListTemplate
      pageTitle={"My ressources"} typeBloc={"ressource"}
      setRessources={setRessources} ressources={ressources}
    >
      {ressources && ressources.map((data: Ressource, index) => (
        <TableRow
          key={index} item={data} index={index}
          deleteAction={() => deleteUserById(data.id)}
          deleteConfirmationMessage="Are you sure you want to delete this resource?"
          viewPathPrefix="/ressource"
          renderCells={(resource: Ressource) => (
            <>
              <td>{resource.name}</td>
              <td>{resource.type}</td>
            </>
          )}
        />
      ))}
    </ListTemplate>
  );
}
