import Dropzone from "@/Components/Dropzone";
import TextArea from "@/Components/Form/TextArea";

import { router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


import axios from "axios";

import toast from 'react-hot-toast';

import ModalForm from "../ModalForm";


const schema = z.object({
    foto_mascota: z
    .instanceof(File) // Verifica que sea una instancia de File
    .refine((file) => ["image/jpeg", "image/png", "image/jpg", "image/gif"].includes(file.type), {
      message: "El archivo debe ser una imagen en formato jpeg, png, jpg o gif.",
    })
    .refine((file) => file.size <= 2048 * 1024, {
      message: "El tamaño máximo permitido es de 2MB.",
    }),
    descripcion: z.string().min(10, { message: 'La descripción debe tener al menos 10 caracteres' }).max(280, { message: 'La descripción no puede tener más de 280 caracteres' }),
});

export default function ExtravioFormModal({ open, onClose }) {

    const { url } = usePage();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(schema),
    });

    const submitForm = async (data) => {

        const formData = new FormData();
        
        for(key in data) {
            const value = data[key];
            formData.append(key, value);
        };

        try {
            await axios.post();
            toast.success("Reporte de extravio registrado");
            reset();
            onClose();
        } catch (error) {
            console.log(error);
            toast.error("Ocurrió un error");
        }
    }

    const images = watch('foto_mascota');

    const secondaryAction = () => {
        reset();
        onClose();
    }

    const primaryAction = () => {
        handleSubmit(submitForm)();
    }

    const uploadImages = (file) => {
        setValue('foto_mascota', file);
    }

    const removeImage =  (name) => {
        reset('foto_mascota');
    }

    return (
        <ModalForm
            title="Reportar extravío"
            show={open}
            onClose={onClose}
            closeable={false}
            description="Completa la información de la mascota"
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
            primaryLabel="Enviar"
            secondaryLabel="Cancelar"
            disabledButtons={isSubmitting}
        >
            <form
                className="px-5"
            >
                <div className="space-y-6 overflow-y-auto">
                    <TextArea
                        id="descripcion"
                        label="Descripción"
                        required
                        type="text"
                        errors={errors["descripcion"]}
                        disabled={isSubmitting}
                        register={register}
                    />

                    <Dropzone
                        uploadImages={uploadImages}
                        removeImage={removeImage}
                        images={images}
                        errors={errors["imagenes"]}
                        isDisabled={isSubmitting}
                        inputText="Presiona o arrastra imagenes de tu mascota (máximo 5 imágenes)"
                        maxFiles={1}
                    />
                </div>
            </form>
        </ModalForm>
    )
}