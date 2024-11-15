import { useQuery } from "@tanstack/react-query";


export const useChat = ({
    id
}) => {
  const fetchChats = async () => {
    const url = "/chat/"+id;

    const res = await fetch(url);
    return res.json();
  };

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: [`chat.${id}`],
    queryFn: fetchChats,
  });

  return {
    data,
    isLoading,
  };
};