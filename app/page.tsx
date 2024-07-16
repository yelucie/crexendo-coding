"use client";

import { Button } from "@/app/ui/button";
import Modal from "@/app/ui/modal";
import store from "@/app/lib/store";
import { Provider } from "react-redux";
import { useState } from "react";
import Footer from "@/app/ui/footer";

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [showForm, setShowForm] = useState(false);
    
    return (
        <Provider store={store}>
            <main className="flex items-center justify-center h-screen bg-gray-800">
                {/* Button to toggle the modal */}
                <Button
                    type="button"
                    className="relative inline-block p-px font-semibold leading-6 text-white no-underline cursor-pointer group rounded-xl shadow-zinc-900"
                    onClick={() => setShowModal(true)}
                >
                    <span className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl ring-1 ring-white/10">Click here to see the modal!</span>
                    <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </Button>

                {/* Modal component */}
                {showModal ? (
                    <Modal setShowModal={setShowModal} setShowForm={setShowForm} showForm={showForm} />
                ) : null}

                {/* Footer component */}
                <Footer />
            </main>
        </Provider>
    );
}
