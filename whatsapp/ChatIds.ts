import { Client } from "whatsapp-web.js";
import { WhatsAppChatList } from "./types";

export const GetChats = async (client: Client): Promise<WhatsAppChatList> => {
  const ChatList = await client.getChats();

  console.info("Chat: ", ChatList);
  return ChatList;
};

// GroupChat {
//     groupMetadata: {
//       id: [Object],
//       creation: 1633978859,
//       owner: [Object],
//       subject: 'B3 Science (B)',
//       subjectTime: 1633980895,
//       desc: 'Class BE is always frist 💯',
//       descId: '26760C483AB92C10BDA56CD5F8D0C947',
//       descTime: 1638481717,
//       descOwner: [Object],
//       restrict: true,
//       announce: false,
//       noFrequentlyForwarded: false,
//       ephemeralDuration: 0,
//       disappearingModeTrigger: 'chat_settings',
//       membershipApprovalMode: false,
//       memberAddMode: 'admin_add',
//       reportToAdminMode: false,
//       size: 0,
//       support: false,
//       suspended: false,
//       terminated: false,
//       uniqueShortNameMap: {},
//       isLidAddressingMode: true,
//       isParentGroup: false,
//       isParentGroupClosed: false,
//       defaultSubgroup: false,
//       generalSubgroup: false,
//       generalChatAutoAddDisabled: false,
//       allowNonAdminSubGroupCreation: false,
//       lastActivityTimestamp: 0,
//       lastSeenActivityTimestamp: 0,
//       hasCapi: false,
//       participants: [Array],
//       pendingParticipants: [],
//       pastParticipants: [Array],
//       membershipApprovalRequests: [],
//       subgroupSuggestions: []
//     },
//     id: {
//       server: 'g.us',
//       user: '252617613034-1633978859',
//       _serialized: '252617613034-1633978859@g.us'
//     },
//     name: 'B3 Science (B)',
//     isGroup: true,
//     isReadOnly: false,
//     unreadCount: 0,
//     timestamp: 1748805855,
//     archived: true,
//     pinned: false,
//     isMuted: false,
//     muteExpiration: 0,
//     lastMessage: undefined
//   },
//
//
//
// PrivateChat {
//   id: {
//     server: 'c.us',
//     user: '252771818342',
//     _serialized: '252771818342@c.us'
//   },
//   name: '+252 771818342',
//   isGroup: false,
//   isReadOnly: false,
//   unreadCount: 0,
//   timestamp: 1753775057,
//   archived: true,
//   pinned: false,
//   isMuted: false,
//   muteExpiration: 0,
//   lastMessage: undefined
// },
//
