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
        
        
    }

    const images = watch('imagenes');

    const secondaryAction = () => {
        reset();
        onClose();
        console.log("hola")
    }

    const primaryAction = () => {
        handleSubmit(submitForm)();
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
                        setImage={setValue}
                        images={images}
                        errors={errors["imagenes"]}
                        isDisabled={isSubmitting}
                        inputText="Presiona o arrastra imagenes de tu mascota (máximo 5 imágenes)"
                    />
                </div>
            </form>
        </ModalForm>
    )
}