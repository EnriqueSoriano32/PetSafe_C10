import ChatItem from '@/Components/ChatItem';
import { useChats } from '@/hooks/useChats';
import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react';
import React from 'react'

const Chats = () => {
  const { data, isLoading } = useChats();

  const chats = data?.chats;
  const notificaciones = data?.notificaciones;

  return (
    <>
      <Head
        title="Bandeja de mensajes"
      />

      <div
        className="px-12 w-full flex flex-col xl:items-center"
      >
        <h1
          className="text-3xl font-bold text-gray-700 my-5"
        >
          Bandeja de mensajes
        </h1>
        <div className='w-full xl:w-1/2'>
            {chats?.length === 0 ? (
                <p>No hay mensajes</p>
            ) : (
                <div
                
                >
                  {chats?.map((chat) => (
                    <ChatItem
                        key={chat?.id}
                        chat={chat}
                        notRead={notificaciones?.some(notification => notification.data.chat_id === chat.id)}
                    />
                  ))}
                </div>
            )}
        </div>
      </div>
    </>
  )
}

Chats.layout = page => (
    <Guest
        children={page}
    />
);

export default Chats