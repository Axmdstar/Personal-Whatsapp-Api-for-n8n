import WAWebJS, { Client, GroupChat } from "whatsapp-web.js";

export const GetChats = async (
  client: Client,
): Promise<{ name: string; id: string }[]> => {
  const ChatList = await client.getChats();

  const privateChats: WAWebJS.PrivateChat[] = ChatList.filter(
    (chat) => !chat.isGroup,
  );
  const groupChats = ChatList.filter((chat) => chat.isGroup);

  let nameandidprivate = privateChats.map((c) => {
    return { name: c.name, id: c.id._serialized };
  });

  let nameandidgroup = groupChats.map((g) => {
    const groupChat = g as GroupChat;
    return { name: groupChat.name, id: g.id._serialized };
  });

  return [...nameandidprivate, ...nameandidgroup];
};
