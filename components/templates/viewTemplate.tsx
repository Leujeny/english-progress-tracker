'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButtonDialog from "../molecules/buttonDialog/IconbuttonDialog";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import PageTable from "../molecules/table/pageTable";
import { SESSION_TABLE_HEADER } from "@/constants/tableHeader";
import { ParamValue } from "next/dist/server/request/params";
import { useEffect, useState } from "react";
import TitleBlocRessource from "../organisms/titleBlocRessource";
import StatsListSession from "../organisms/statsListSession";
import StatsList from "../organisms/statsList";

interface Props {
    ressources: Ressource[],
    setRessources: (value: Ressource[] | ((val: Ressource[]) => Ressource[])) => void,
    sessions: Session[],
    ressource_id: ParamValue
}

export default function ViewTemplate({ ressources, setRessources, sessions, ressource_id }: Props) {
    const [ressource, setRessource] = useState<Ressource>();
    const [linkedSessions, setLinkedSessions] = useState<Session[]>();

    const getUserById = (id: number) => {
        return ressources.find(res => res.id === id);
    };

    const getUserByName = (ressource_name: string) => {
        return sessions.filter(res => res.podcast === ressource_name);
    };

    const deleteUserById = (id: number) => {
        setRessources(prevUsers => prevUsers.filter(user => user.id !== id));
    };

    useEffect(() => {
        if (typeof ressource_id === 'string') {
            setRessource(getUserById(parseInt(ressource_id)));
        }
    }, [ressources]);

    useEffect(() => {
        if (ressource?.name) {
            setLinkedSessions(getUserByName(ressource.name));
        }
    }, [ressource]);

    return (
        <>
            <TitleBlocRessource ressource={ressource} setRessources={setRessources} />
            <StatsList />
            {(linkedSessions && linkedSessions.length > 0) && (
                <div className="card bg-base-100 shadow-sm mt-8">
                    <div className="card-body">
                        <h2 className="card-title">Related resources</h2>
                        <PageTable tableSize={ressources.length} tableHeader={SESSION_TABLE_HEADER}>
                            {linkedSessions && linkedSessions.map((data: Session, index: number) => (
                                <tr key={index}>
                                    <th className="hidden lg:block">{index + 1}</th>
                                    <td>{data.date}</td>
                                    <td>{data.podcast}</td>
                                    <td>{data.type}</td>
                                    <td className="flex justify-end">
                                        <IconButtonDialog title={"Delete a ressource"} iconTitle={faTrash} btnAction={() => deleteUserById(data.id)} color={"error"} lableAction={"Delete"}>
                                            <p>Are you sure you want to delete this resource?</p>
                                        </IconButtonDialog>
                                        <a href={`/session/${data.id}/update`}>
                                            <button className="btn btn-circle btn-ghost hidden lg:block">
                                                <FontAwesomeIcon icon={faPen} className="text-warning" />
                                            </button>
                                        </a>
                                        <a href={`/session/${data.id}`}>
                                            <button className="btn btn-circle btn-ghost">
                                                <FontAwesomeIcon icon={faEye} className="text-primary" />
                                            </button>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </PageTable>
                    </div>
                </div>
            )}
        </>
    );
}
