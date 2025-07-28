import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButtonDialog from "../molecules/buttonDialog/IconbuttonDialog";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

interface Props {
    session: Session | undefined,
    setSessions: (value: Session[] | ((val: Session[]) => Session[])) => void,
}

export default function TitleBlocSession({ session, setSessions }: Props) {
    const router = useRouter();

    const deleteUserById = (id: number) => {
        setSessions(prevUsers => prevUsers.filter(user => user.id !== id));
        router.back()
    };

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="text-5xl">{session?.episode}</h1>
                <p className="text-lg text-base-content">
                    {session?.podcast}
                </p>
                <div className="flex justify-between">
                    <div className="badge badge-soft badge-secondary">{session?.type}</div>
                    <div className="flex">
                        <IconButtonDialog
                            title={"Delete a ressource"}
                            iconTitle={faTrash}
                            btnAction={() => session?.id ? deleteUserById(session?.id) : undefined}
                            color={"error"}
                            lableAction={"Delete"}
                        >
                            <p>Are you sure you want to delete this resource?</p>
                        </IconButtonDialog>
                        <a href={`/session/${session?.id}/update`}>
                            <button className="btn btn-circle btn-ghost hidden lg:block">
                                <FontAwesomeIcon icon={faPen} className="text-warning" />
                            </button>
                        </a>
                    </div>
                </div>
                <p className="mb-4 text-lg text-base-content">
                    {session?.note}
                </p>
            </div>
        </div>
    );
}
