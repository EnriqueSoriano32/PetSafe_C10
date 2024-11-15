import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Echo from 'laravel-echo';

import toast from "react-hot-toast";

export const useChatSocket = () => {
  const [socket, setSocket] = useState(null);

  const { auth } = usePage().props;

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
                toast.custom((t) => (
                  <div
                    className={`${
                      t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                  >
                    <div className="flex-1 w-0 p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={notification?.user?.photo}
                            alt="profile image"
                          />
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {notification?.user?.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                          {notification?.user?.mensaje}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                      <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ));
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