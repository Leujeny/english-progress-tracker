'use client'

import { useLocalStorage } from "@/hook/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faEye } from '@fortawesome/free-solid-svg-icons'
import PageTable from "@/components/molecules/table/pageTable";
import { SESSION_TABLE_HEADER } from "@/constants/tableHeader";
import AddSessionButtonModal from "@/components/molecules/buttonModal/addSessionButtonModal";

export default function Session() {
  const [sessions, setSessions] = useLocalStorage<Session[]>("sessions", []);
  const [ressources, setRessources] = useLocalStorage<Ressource[]>("ressources", []);

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">My sessions</h2>
        <AddSessionButtonModal sessions={sessions} setSessions={setSessions} ressources={ressources} />
        <PageTable tableSize={sessions.length} tableHeader={SESSION_TABLE_HEADER}>
          {sessions && sessions.map((data: Session, index) => (
            <tr key={index}>
              <th className="hidden lg:block">{index + 1}</th>
              <td>{data.date}</td>
              <td>{data.episode}</td>
              <td>{data.type}</td>
              <td className="flex justify-end">
                <button className="btn btn-circle btn-ghost hidden lg:block">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="btn btn-circle btn-ghost hidden lg:block">
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <a href={`/session/${data.id}`} className="btn btn-circle btn-ghost">
                  <FontAwesomeIcon icon={faEye} />
                </a>
              </td>
            </tr>
          ))}
        </PageTable>
      </div>
    </div>
  );
}
