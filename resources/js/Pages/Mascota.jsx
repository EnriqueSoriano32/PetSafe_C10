import ChatInput from "@/Components/Form/ChatInput";
import Carousel from "@/Components/Carousel";
import { LogInWithGoogle } from "@/Components/LogInWithGoogle";
import useAuth from "@/hooks/useAuth";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

import { usePage } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";

const Mascota = ({ mascota }) => {

    const [loading, setLoading] = useState(false);

    const { auth } = usePage().props;
    const { setLoginModal, setRegisterModal } = useAuth();

    const sendMessage = (message) => {
        setLoading(true);

        axios.post("/send/message",  { contenido: message, mascotaId: mascota.id })
            .then(() => {

            })
            .catch(() => {
                
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            <Head title="Mascotas en adopción" />
            
            <div className="px-12 mt-20 pb-20">
                <h1
                    className="text-3xl font-bold text-gray-700 my-3"
                >{mascota.tipo.nombre}</h1>
                <div className="flex flex-col md:flex-row gap-2">
                    <div
                        className="w-full md:w-2/3"
                    >
                        <Carousel
                            images={mascota?.imagenes}
                            type="show"
                        />
                        <div className="mt-4">
                            <p
                                className="text-xl"
                            >
                                {mascota.tipo.nombre}
                                &bull;
                                Sexo: {mascota.sexo}
                                &bull;
                                Edad: {mascota.edad} meses
                                &bull;
                                Peso: {mascota.peso} kg
                            </p>
                            <p
                                className="text-md text-gray-500"
                            >{mascota.descripcion}</p>
                        </div>
                    </div>
                    <div className="hidden w-1/3 shadow-2xl md:flex flex-col border rounded-lg p-5">
                        <h2
                            className="text-lg font-bold text-center"
                        >Enviar mensaje</h2>

                        {!auth?.user ? (
                            <div
                                className="h-full flex flex-col gap-4 items-center justify-center"
                            >
                                <p 
                                    className="text-md text-gray-500"
                                >Inicia sesión para contactar por esta mascota</p>
                                <p
                                    className="text-md text-gray-500"
                                >
                                    ¿Aún no tienes una cuenta? 
                                    <span 
                                        className="cursor-pointer text-custom-gold"
                                        onClick={() => setRegisterModal(true)}
                                    >&nbsp;Registrate</span>
                                </p>
                                <button
                                    className="text-md text-custom-gold"
                                    onClick={() => setLoginModal(true)}
                                >Iniciar sesión</button>
                                <LogInWithGoogle
                                    text="Inicia sesión con Google"
                                />
                            </div>
                        ) : (
                            <div className="h-full flex flex-col bg-gray-100">
                                <div className="flex-1 flex items-center justify-center">
                                    <p
                                        className="text-md text-gray-500 text-center"
                                    >
                                        No compartas información delicada y respeta las normas de la comunidad
                                    </p>
                                </div>
                                <ChatInput
                                    onSendMessage={sendMessage}
                                    disabled={loading}
                                />
                            </div>
                        )}
                    </div>
                    <button
                      className="block md:hidden w-full h-12 bg-custom-gold text-white text-center font-bold rounded-md"
                    >Enviar mensaje</button>
                </div>
            </div>
        </>
    );
}

Mascota.layout = page => (
    <Guest
        children={page}
    />
);

export default Mascota;