import { useQuery } from "@tanstack/react-query";


export const useChats = () => {
  const fetchChats = async () => {
    const url = "/mychats";

    const res = await fetch(url);
    return res.json();
  };

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ["chats"],
    queryFn: fetchChats,
  });

  return {
    data,
    isLoading,
  };
};