"use client";

import React, { useState } from "react";
import { Button } from "@/app/ui/button";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";

import { setUser } from "@/app/features/user/userSlice";
import { CheckIcon } from "@heroicons/react/24/outline";

import Image from "next/image";

interface EditFormProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailsForm: React.FC<EditFormProps> = ({ setShowForm }) => {
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();

    const [name, setName] = useState(user.name);
    const [role, setRole] = useState(user.role);
    const [phone, setPhone] = useState(user.phone);
    const [email, setEmail] = useState(user.email);
    const [notes, setNotes] = useState(user.notes);
    const [profile, setProfile] = useState(user.profile);

    const [errors, setErrors] = useState({
        name: "",
        role: "",
        phone: "",
        email: "",
        profile: "",
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = { name: "", role: "", phone: "", email: "", profile: ""};
        const regex = /^[a-zA-Z\s'-àáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]+$/;

        if (!regex.test(name)) {
            newErrors.name = "Name should contain only letters, spaces, hyphens, and apostrophes.";
            valid = false;
        }
        if (!regex.test(role)) {
            newErrors.role = "Role should contain only letters, spaces, hyphens, and apostrophes.";
            valid = false;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email address.";
            valid = false;
        }
        if (!/^(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone)) {
            newErrors.phone = "Please enter a valid US phone number.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(setUser({ name, role, phone, email, notes, profile }));
            setShowForm(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* User Details */}
            <div className="sm:flex sm:items-start mt-3 text-center sm:mx-4 sm:mt-0 sm:text-left">
                <dl className="mt-4 w-full space-y-4">
                    {/* User Name */}
                    <div>
                        <label htmlFor="name" className="block mb-1 font-semibold text-white">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-300 focus:ring-1 focus:ring-white/10 focus:border-slate-500"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    {/* User Role */}
                    <div>
                        <label htmlFor="role" className="block mb-1 font-semibold text-white">Role</label>
                        <input
                            id="role"
                            type="text"
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-300 focus:ring-1 focus:ring-white/10 focus:border-slate-500"
                            required
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                    </div>
                    {/* User Email */}
                    <div>
                        <label htmlFor="email" className="block mb-1 font-semibold text-white">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-300 focus:ring-1 focus:ring-white/10 focus:border-slate-500"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    {/* User Phone Number */}
                    <div>
                        <label htmlFor="phone" className="block mb-1 font-semibold text-white">Phone</label>
                        <input
                            id="phone"
                            type="tel"
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-300 focus:ring-1 focus:ring-white/10 focus:border-slate-500"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    {/* User Notes */}
                    <div>
                        <label className="block mb-1 font-semibold text-white">Notes</label>
                        <textarea
                            rows={6}
                            className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-300 focus:ring-1 focus:ring-white/10 focus:border-slate-500 sm:mb-5"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                </dl>
            </div>
            {/* Footer options */}
            <div className="mt-5 sm:mt-4 sm:mr-4 sm:flex sm:flex-row-reverse">
                {/* Save button */}
                <Button
                    type="submit"
                    className="relative inline-flex p-px leading-6 w-full shadow-2xl cursor-pointer justify-center group rounded-xl px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-800 sm:ml-3 sm:w-auto"
                >
                    <CheckIcon className="h-5 w-5 text-white" />
                    <span>Save</span>
                </Button>
                {/* Cancel button */}
                <Button
                    type="button"
                    className="relative p-px leading-6 no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900 mt-3 inline-flex w-full justify-center px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/10 sm:mt-0 sm:w-auto"
                    onClick={() => setShowForm(false)}
                >
                    <span>Cancel</span>
                    <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-100 group-hover:opacity-100"></span>
                    <span className="absolute -bottom-0 h-px w-[calc(100%-1rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/45 to-emerald-400/0 transition-opacity duration-100 group-hover:opacity-40"></span>
                </Button>
            </div>
        </form>
    );
}

export default DetailsForm;