'use client'

import { Dispatch, SetStateAction } from "react";
import AddRessourceButtonModal from "../molecules/buttonModal/addRessourceButtonModal";
import AddSessionButtonModal from "../molecules/buttonModal/addSessionButtonModal";
import PageTable from "../molecules/table/pageTable";
import { RESSOURCE_TABLE_HEADER, SESSION_TABLE_HEADER } from "@/constants/tableHeader";

interface Props {
    children: React.ReactNode;
    pageTitle: string;
    typeBloc: 'ressource' | 'session',
    ressources: Ressource[],
    setRessources?: Dispatch<SetStateAction<Ressource[]>>
    sessions?: Session[],
    setSessions?: Dispatch<SetStateAction<Session[]>>
}

export default function ListTemplate({ children, pageTitle, typeBloc, ressources, setRessources, sessions, setSessions }: Props) {
    const length: number = typeBloc === 'ressource' ? ressources.length : sessions?.length ? sessions?.length : 0;
    const ressource: string[] = typeBloc === 'ressource' ? RESSOURCE_TABLE_HEADER : SESSION_TABLE_HEADER;

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{pageTitle}</h2>
                {(typeBloc === 'ressource' && setRessources) && (
                    <AddRessourceButtonModal setRessources={setRessources} ressources={ressources} />
                )}
                {(typeBloc === 'session' && sessions && setSessions) && (
                    <AddSessionButtonModal sessions={sessions} setSessions={setSessions} ressources={ressources} />
                )}
                <PageTable tableSize={length} tableHeader={ressource}>
                    {children}
                </PageTable>
            </div>
        </div>
    );
}
