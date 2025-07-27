'use client'
import { useRef } from "react";

interface Props {
    children: any,
    title: string,
    addSession: () => void,
}

export default function ButtonDialog({ children, title, addSession }: Props) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };
    return (
        <>
            <button className="btn btn-soft btn-primary rounded-md max-w-40" onClick={openModal}>
                New session
            </button>

            <dialog ref={modalRef} id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">{title}</h3>
                    {children}
                    <form method="dialog">
                        <button onClick={addSession} className="btn btn-primary rounded-sm me-4  mt-4">Add</button>
                        <button className="btn btn-primary btn-outline rounded-sm  mt-4">Close</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}
