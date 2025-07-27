'use client'
import Dialog from "@/components/atoms/dialog/dialog";
import { useRef } from "react";

interface Props {
    children: React.ReactNode,
    title: string,
    btnTitle: string,
    btnAction: () => void,
    lableAction: 'Add' | 'Delete' | 'Update'
}

export default function ButtonDialog({ children, title, btnTitle, btnAction, lableAction }: Props) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };
    return (
        <>
            <button className="btn btn-soft btn-primary rounded-md max-w-40" onClick={openModal}>
                {btnTitle}
            </button>
            <Dialog modalRef={modalRef} title={title} btnAction={btnAction} lableAction={lableAction}>
                {children}
            </Dialog>
        </>
    );
}
