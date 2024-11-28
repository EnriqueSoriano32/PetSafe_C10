import { useForm } from "react-hook-form";

import Modal from "../Modal";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';

import Input from "@/Components/Form/Input";
import { LogInWithGoogle } from "../LogInWithGoogle";


import axios from "axios";

import { router } from '@inertiajs/react'

import toast from 'react-hot-toast';
import { useState } from "react";


const schema = z.object({
    email: z.string().email({ message: 'El email no es válido' }),
    password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
});

export default function LoginModal({
    open,
    onClose,
    action,
}) {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(schema),
    });

    const onLogin = (data) => {
        return axios.post('/login', data)
            .then((response) => {
                reset();
                onClose();
                if(response.data.roles[0] === "Organizacion" || response.data.roles[0] === "Administrador") {
                    router.visit("/dashboard");
                } else {
                    router.reload();
                    toast.success("Bienvenido de nuevo");
                }
            })
            .catch((e) => {
                if(e.response.status === 422) {
                    return toast.error("Credenciales incorrectas.");
                };
                toast.error("Ocurrió un error");
            });
    };

    return (
        <Modal
            title="Iniciar sesión"
            show={open}
            closeable
            onClose={() => {
                reset();
                onClose();
            }}
        >
            <form 
                onSubmit={handleSubmit(onLogin)}
                className="space-y-6 px-5 py-3"
            >
                <Input
                    id="email"
                    label="Correo"
                    required
                    type="email"
                    errors={errors["email"]}
                    disabled={isSubmitting}
                    register={register}
                />

                <Input
                    id="password"
                    label="Contraseña"
                    required
                    type="password"
                    errors={errors["password"]}
                    disabled={isSubmitting}
                    register={register}
                />

                <button 
                    type="submit"
                    className="w-full h-12 bg-custom-gold text-white text-center font-bold rounded-md disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={isSubmitting}
                >
                    Iniciar sesión
                </button>

                <LogInWithGoogle
                    text="Iniciar sesión con Google"
                    disabled={isSubmitting}
                />
            </form>

            <p 
                className="text-center text-sm text-gray-500 p-2"
            >
                No tienes una cuenta? <span
                    className="cursor-pointer font-bold"
                    onClick={action}
                >Registrate</span>
            </p>
        </Modal>
    );
};