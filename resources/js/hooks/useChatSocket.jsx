import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Echo from 'laravel-echo';

import toast from "react-hot-toast";
import Notification from "@/Components/Notification";

import { useQueryClient } from "@tanstack/react-query";

export const useChatSocket = () => {
  const [socket, setSocket] = useState(null);
  const queryClient = useQueryClient();

  const { auth } = usePage().props;
  const { url } = usePage();

  useEffect(() => {
    if(auth?.user) {
        const echo = new Echo({
            broadcaster: 'reverb',
            key: import.meta.env.VITE_REVERB_APP_KEY,
            wsHost: import.meta.env.VITE_REVERB_HOST,
            wsPort: import.meta.env.VITE_REVERB_PORT,
            wssPort: import.meta.env.VITE_REVERB_PORT,
            forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
            enabledTransports: ['ws', 'wss'],
        });
    
        setSocket(echo);
    
        echo.private('users.'+auth?.user?.id)
          .notification((notification) => {
              console.log(1);
              if(!url.includes('chats')) {
                toast.custom((t) => <Notification t={t} notification={notification} />);
              }

              queryClient.setQueryData([`chat.${notification.chat_id}`], (oldData) => {
                if(!oldData) {
                  if(url === '/chats') {
                    queryClient.invalidateQueries(["chats"]);
                  };

                  return oldData;
                }

                const mensajes = structuredClone(oldData.mensajes);
                mensajes.push(notification.mensaje);

                return {
                  ...oldData,
                  mensajes
                }
              });
          });
    }

    return () => {
      socket?.disconnect();
      setSocket(null);
    };
  }, [auth?.user]);

  useEffect(() => {
    if(!auth?.user)
    {
        if(socket) {
            socket?.disconnect();
            setSocket(null);
        }
    }
  }, [auth?.user])
};