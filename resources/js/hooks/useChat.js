import { useQuery } from "@tanstack/react-query";


export const useChat = ({
    id
}) => {
  const fetchChats = async () => {
    const url = "/chat/"+id;

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
    queryKey: [`chat.${id}`],
    queryFn: fetchChats,
    refetchInterval: false,
  });

  return {
    data,
    isLoading,
  };
};