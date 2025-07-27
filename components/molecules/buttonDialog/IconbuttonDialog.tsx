'use client'
import Dialog from "@/components/atoms/dialog/dialog";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

interface Props {
    children: React.ReactNode,
    title: string,
    iconTitle: IconDefinition,
    btnAction: () => void,
    color: 'primary' | 'warning' | 'error',
    lableAction: 'Add' | 'Delete' | 'Update'
}

export default function IconButtonDialog({ children, title, iconTitle, btnAction, lableAction }: Props) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };
    return (
        <>
            <button className="btn btn-circle btn-ghost hidden lg:block" onClick={openModal}>
                <FontAwesomeIcon icon={iconTitle} className="text-error" />
            </button>
            <Dialog modalRef={modalRef} title={title} btnAction={btnAction} lableAction={lableAction}>
                {children}
            </Dialog>
        </>
    );
}
