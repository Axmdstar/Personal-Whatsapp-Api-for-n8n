import WAWebJS, { Client, GroupChat, PrivateChat } from "whatsapp-web.js";
import { WhatsAppChatList } from "./types";

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

  // console.log("Private Chats:", nameandidprivate);
  // console.log("Group Chats:", nameandidgroup);
  return [...nameandidprivate, ...nameandidgroup];
};

let Private = [
  { name: "+252 61 4918632", id: "252614918632@c.us" },
  { name: "Baba Somali", id: "252613044786@c.us" },
  { name: "Manal Faarax", id: "252770352824@c.us" },
  { name: "Apdalla", id: "252611632677@c.us" },
  { name: "ilyaas Cade", id: "252612892752@c.us" },
  { name: "محمد علي", id: "252616906500@c.us" },
  { name: "Mama", id: "252612553160@c.us" },
  { name: "+252 61 3446957", id: "252613446957@c.us" },
  { name: "+252 61 1240518", id: "252611240518@c.us" },
  { name: "+252 61 9215670", id: "252619215670@c.us" },
];

let Group = [
  { name: "Computer Science (B)", id: "120363028942444813@g.us" },
  { name: "SNU–EUROSOM Connect", id: "120363424636092364@g.us" },
  { name: "Family yaanyow", id: "120363423659083387@g.us" },
  { name: "Test", id: "120363404246210535@g.us" },
  { name: "GRADUATION 🎓 GROUP 9", id: "120363398099083801@g.us" },
  { name: "Team ICT", id: "120363025205535542@g.us" },
  { name: "CS Future Leaders Hub JUS", id: "120363407319427638@g.us" },
  { name: "Dhool mobile app", id: "120363422936939483@g.us" },
  { name: "Devs", id: "120363401206923429@g.us" },
  {
    name: "Dufcada 16aad Samaside group (siidii-school)",
    id: "120363140461997289@g.us",
  },
];
