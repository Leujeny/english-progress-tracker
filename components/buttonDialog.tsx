import { useRef } from "react";

interface Props {
    children: any,
    title: string,
}

export default function ButtonDialog({ children, title }: Props) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };
    return (
        <>
            <button className="btn btn-soft btn-primary rounded-md" onClick={openModal}>
                New session
            </button>

            <dialog ref={modalRef} id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">{title}</h3>
                    {children}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}
