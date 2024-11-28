import queryClient from './queryClient';

export default function refreshQuery() {
  queryClient.invalidateQueries(['chats']); // Reemplaza con la clave de tu consulta
}
