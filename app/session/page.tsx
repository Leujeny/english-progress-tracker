'use client'

import { useLocalStorage } from "@/hook/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faEye } from '@fortawesome/free-solid-svg-icons'
import ButtonDialog from "@/components/buttonDialog";
import PageTable from "@/components/table/pageTable";

const tableHeader = ['Date', 'Name', 'Type']

export default function Session() {
  const [sessions, setSessions] = useLocalStorage<Session[]>("sessions", []);

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">My sessions</h2>
        <ButtonDialog children={undefined} title={"Add a ressource"} addSession={() => undefined} />
        <PageTable tableSize={sessions.length} tableHeader={tableHeader}>
          {sessions && sessions.map((data: Session, index) => (
            <tr key={index}>
              <th className="hidden lg:block">{index + 1}</th>
              <td>{data.date}</td>
              <td>{data.name}</td>
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
