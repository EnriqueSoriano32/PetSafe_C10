import { useState, useEffect, useRef } from 'react';

import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'

import formatoChat from '@/libs/formatoChat'
import ChatInput from '@/Components/Form/ChatInput';
import { useChat } from '@/hooks/useChat';

import { useQueryClient } from "@tanstack/react-query";

const Chat = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const bottomRef = useRef();

  const {
    data,
    isLoading
  } = useChat({ id });

  const chat = data;

  const sendMessage = (message) => {
    setLoading(true);

    axios.post("/send/message",  { contenido: message, mascotaId: chat.mascota.id })
      .then((response) => {
        queryClient.setQueryData([`chat.${id}`], (oldData) => {
          const mensajes = structuredClone(oldData.mensajes);
          mensajes.push(response.data);

          return {
            ...oldData,
            mensajes
          }
        });
      })
      .catch((error) => {
          console.log(error);
      })
      .finally(() => {
          setLoading(false);
      });
  }

  useEffect(() => {
    bottomRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat?.mensajes]);

  return (
    <>
      <Head
        title={'Chat con '+ chat?.person?.nombre}
      />
      <div className="px-12 w-full flex flex-col xl:items-center h-full">
        <h1
          className="text-xl font-bold text-gray-700 mb-2"
        >
          {chat?.person?.nombre}
        </h1>
        <div className="overflow-y-auto flex-1 flex flex-col gap-5 w-full md:w-1/2 pb-2">
          {chat?.mensajes?.map((mensaje) => (
            <div
              className={`flex ${mensaje.user_id !== chat?.person?.id ? 'flex-row-reverse' : ''}`}
              key={mensaje?.id}
            >
              <div
                className={`pr-20 pl-2 py-2 text-white rounded-xl ${mensaje.user_id !== chat?.person?.id ? 'bg-gray-300' : 'bg-blue-300'}`}
              >
                <p
                  className="text-lg"
                >{mensaje?.contenido}</p>
                <p
                  className="text-xs"
                >
                  {formatoChat(mensaje?.created_at)}
                </p>
              </div>
            </div>
          ))}
          <div className="flex-1" ref={bottomRef}/>
        </div>
        <ChatInput
          disabled={loading}
          onSendMessage={sendMessage}
        />
      </div>
    </>
  )
}

Chat.layout = page => (
  <Guest
    children={page}
  />
);

export default Chat