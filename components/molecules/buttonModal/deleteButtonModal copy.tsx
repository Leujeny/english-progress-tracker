'use client'
import { Dispatch, SetStateAction } from "react";
import ButtonDialog from "../buttonDialog/buttonDialog";


interface Props {
  sessions: Session[],
  setSessions: Dispatch<SetStateAction<Session[]>>
}

export default function DeleteButtonModal({ sessions, setSessions }: Props) {

  // const deleteUserById = (id: number) => {
  //   setRessources(prevUsers => prevUsers.filter(user => user.id !== id));
  // };

  return (
    <ButtonDialog title={"Add a session"} btnAction={() => undefined} btnTitle={"New session"} children={undefined} lableAction={"Delete"}>

    </ButtonDialog>
  );

}
