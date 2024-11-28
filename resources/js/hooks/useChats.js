import { useQuery } from "@tanstack/react-query";


export const useChats = () => {
  const fetchChats = async () => {
    const url = "/mychats";

    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });
    return res.json();
  };

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ["chats"],
    queryFn: fetchChats,
    refetchInterval: false,
  });

  return {
    data,
    isLoading,
  };
};