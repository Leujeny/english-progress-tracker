import { RefObject } from "react";

interface Props {
    children: React.ReactNode;
    modalRef: RefObject<HTMLDialogElement | null>,
    title: string,
    btnAction: () => void;
    lableAction: 'Add' | 'Delete' | 'Update'
}

export default function Dialog({ children, modalRef, title, btnAction, lableAction }: Props) {

    return (
        <dialog ref={modalRef} id="my_modal_2" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">{title}</h3>
                {children}
                <form method="dialog">
                    <button onClick={btnAction} className="btn btn-primary rounded-sm me-4  mt-4">{lableAction}</button>
                    <button className="btn btn-primary btn-outline rounded-sm  mt-4">Close</button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}
