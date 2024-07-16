"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import Details from "@/app/ui/details";
import DetailsForm from "@/app/ui/details-form";

export interface ModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    showForm: boolean;
}

const Modal: React.FC<ModalProps> = ({ setShowModal, setShowForm, showForm }) => {
    const user = useSelector((state: RootState) => state.user.user);

    return (
        <>
            <div className="relative z-10" aria-labelledby="User information" role="dialog" aria-modal="true">
                {/* Modal Background */}
                <div className="fixed inset-0 bg-gray-900 opacity-70"></div>

                {/* Modal */}
                <div className="fixed inset-0 w-screen overflow-auto flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-1">
                    <div className="relative transform rounded-lg bg-gray-800 px-4 py-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-8">
                        { showForm ? 
                            (
                                <>
                                    {/* Edit Form */}
                                    <DetailsForm setShowForm={setShowForm}/>
                                </>
                            ) : (
                                <>
                                    {/* User Information */}
                                    <Details setShowModal={setShowModal} setShowForm={setShowForm} showForm={showForm} name={user.name} role={user.role} email={user.email} phone={user.phone} notes={user.notes} profile={user.profile} />
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;