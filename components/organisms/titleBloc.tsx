import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButtonDialog from "../molecules/buttonDialog/IconbuttonDialog";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

interface Props {
    ressource: Ressource | undefined,
    setRessources: (value: Ressource[] | ((val: Ressource[]) => Ressource[])) => void,
}

export default function TitleBloc({ ressource, setRessources }: Props) {
    const router = useRouter();

    const deleteUserById = (id: number) => {
        setRessources(prevUsers => prevUsers.filter(user => user.id !== id));
        router.back()
    };

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="text-5xl">{ressource?.name}</h1>
                <div className="flex justify-between">
                    <div className="badge badge-soft badge-secondary">{ressource?.type}</div>
                    <div className="flex">
                        <IconButtonDialog
                            title={"Delete a ressource"}
                            iconTitle={faTrash}
                            btnAction={() => ressource?.id ? deleteUserById(ressource?.id) : undefined}
                            color={"error"}
                            lableAction={"Delete"}
                        >
                            <p>Are you sure you want to delete this resource?</p>
                        </IconButtonDialog>
                        <button className="btn btn-circle btn-ghost hidden lg:block">
                            <FontAwesomeIcon icon={faPen} className="text-warning" />
                        </button>
                    </div>
                </div>
                <p className="mb-4 text-lg text-base-content">
                    {ressource?.note}
                </p>
            </div>
        </div>
    );
}
