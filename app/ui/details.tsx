import React from "react";
import Image from "next/image";
import { ModalProps } from "@/app/ui/modal";
import { Button } from "@/app/ui/button";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

interface DetailsProps {
    name: string;
    role: string;
    email: string;
    phone: string;
    notes: string;
    profile: string;
}

const Details: React.FC<DetailsProps & ModalProps> = ({ setShowModal, setShowForm, name, role, email, phone, notes, profile }) => {
    return (
        <>
            {/* User Basic Information */}
            <div className="text-center">
                <Image 
                    src={profile}
                    className="mx-auto mb-5 aspect-square object-cover rounded-full ring-2 p-1 ring-gray-600"
                    alt="User avatar"
                    width={128}
                    height={128}
                    unoptimized={true}
                />
                <h5 className="mb-1 text-white text-xl font-medium leading-tight">{name}</h5>
                <p className="text-neutral-400">{role}</p>
            </div>
            {/* User Details */}
            <div className="sm:flex sm:items-start mt-3 text-center sm:mx-4 sm:mt-0 sm:text-left">
                <dl className="mt-4 w-full">
                    {/* User Email */}
                    <dt className="mb-2 font-semibold leading-none text-white">Email</dt>
                    <dd className="mb-4 font-light sm:mb-5 text-gray-400">{email}</dd>
                    {/* User Phone Number */}
                    <dt className="mb-2 font-semibold leading-none text-white">Phone</dt>
                    <dd className="mb-4 font-light sm:mb-5 text-gray-400">{phone}</dd>
                    {/* User Notes */}
                    <dt className="mb-2 font-semibold leading-none text-white">Notes</dt>
                    <dd className="mb-4 font-light sm:mb-5 text-gray-400 overflow-y-auto whitespace-pre-wrap max-h-40">{notes}</dd>
                </dl>
            </div>
            {/* Footer options */}
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                {/* Edit button */}
                <Button
                    type="button"
                    className="relative inline-flex p-px leading-6 w-full shadow-2xl cursor-pointer justify-center group rounded-xl px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-800 sm:ml-3 sm:w-auto"
                    onClick={() => setShowForm(true)}
                >
                    <PencilSquareIcon className="h-5 w-5 text-white" />
                    <p>Edit</p>
                </Button>
                {/* Cancel button */}
                <Button
                    type="button"
                    className="relative p-px leading-6 no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900 mt-3 inline-flex w-full justify-center px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/10 sm:mt-0 sm:w-auto"
                    onClick={() => setShowModal(false)}
                >
                    <span>Back</span>
                    <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-100 group-hover:opacity-100"></span>
                    <span className="absolute -bottom-0 h-px w-[calc(100%-1rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/45 to-emerald-400/0 transition-opacity duration-100 group-hover:opacity-40"></span>
                </Button>
            </div>
        </>
    );
};

export default Details;