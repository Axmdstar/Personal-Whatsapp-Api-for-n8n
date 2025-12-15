export interface IncomingWhatsAppMessage {
  id: string;
  chatId: string;
  from: string;
  name: string;
  isGroup: boolean;
  sender?: string;
  text?: string;
  hasMedia: boolean;
  timestamp: number;
}

export interface WhatsAppMedia {
  mimetype: string;
  data: string; // base64
  filename?: string;
}

export interface WhatsAppHistoryMessage {
  id: string;
  text?: string;
  sender?: string;
  timestamp: number;
  fromMe: boolean;
}

export interface WhatsAppMessage {
  _data: Data;
  id: Id2;
  ack: number;
  hasMedia: boolean;
  body: string;
  type: string;
  timestamp: number;
  from: string;
  to: string;
  author: string;
  deviceType: string;
  isForwarded: boolean;
  forwardingScore: number;
  isStatus: boolean;
  isStarred: boolean;
  fromMe: boolean;
  hasQuotedMsg: boolean;
  hasReaction: boolean;
  vCards: any[];
  mentionedIds: any[];
  groupMentions: any[];
  isGif: boolean;
  links: any[];
}

export type WhatsAppChatList = (PrivateChat | GroupChat)[];

export interface PrivateChat {
  id: PrivateChatId;
  name: string;
  isGroup: boolean;
  isReadOnly: boolean;
  unreadCount: number;
  timestamp: number;
  archived: boolean;
  pinned: boolean;
  isMuted: boolean;
  muteExpiration: number;
}

export interface PrivateChatId {
  server: string;
  user: string;
  _serialized: string;
}

export interface Data {
  id: dataId;
  viewed: boolean;
  body: string;
  type: string;
  t: number;
  clientReceivedTsMillis: number;
  notifyName: string;
  from: string;
  to: string;
  author: string;
  ack: number;
  invis: boolean;
  isNewMsg: boolean;
  star: boolean;
  kicNotified: boolean;
  recvFresh: boolean;
  isFromTemplate: boolean;
  isAdsMedia: boolean;
  pollInvalidated: boolean;
  isSentCagPollCreation: boolean;
  latestEditMsgKey: any;
  latestEditSenderTimestampMs: any;
  mentionedJidList: any[];
  groupMentions: any[];
  isEventCanceled: boolean;
  eventInvalidated: boolean;
  isVcardOverMmsDocument: boolean;
  isForwarded: boolean;
  isQuestion: boolean;
  questionReplyQuotedMessage: any;
  questionResponsesCount: number;
  readQuestionResponsesCount: number;
  forwardsCount: number;
  labels: any[];
  hasReaction: boolean;
  viewMode: string;
  messageSecret: MessageSecret;
  productHeaderImageRejected: boolean;
  lastPlaybackProgress: number;
  isDynamicReplyButtonsMsg: boolean;
  isCarouselCard: boolean;
  parentMsgId: any;
  callSilenceReason: any;
  isVideoCall: boolean;
  callDuration: any;
  callCreator: any;
  callParticipants: any;
  isCallLink: any;
  callLinkToken: any;
  isMdHistoryMsg: boolean;
  stickerSentTs: number;
  isAvatar: boolean;
  lastUpdateFromServerTs: number;
  invokedBotWid: any;
  bizBotType: any;
  botResponseTargetId: any;
  botPluginType: any;
  botPluginReferenceIndex: any;
  botPluginSearchProvider: any;
  botPluginSearchUrl: any;
  botPluginSearchQuery: any;
  botPluginMaybeParent: boolean;
  botReelPluginThumbnailCdnUrl: any;
  botMessageDisclaimerText: any;
  botMsgBodyType: any;
  reportingTokenInfo: ReportingTokenInfo;
  requiresDirectConnection: any;
  bizContentPlaceholderType: any;
  hostedBizEncStateMismatch: boolean;
  senderOrRecipientAccountTypeHosted: boolean;
  placeholderCreatedWhenAccountIsHosted: boolean;
  groupHistoryBundleMessageKey: any;
  groupHistoryBundleMetadata: any;
  nonJidMentions: any;
  links: any[];
}

export interface dataId {
  fromMe: boolean;
  remote: string;
  id: string;
  participant: string;
  _serialized: string;
}

export interface MessageSecret {
  "0": number;
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  "6": number;
  "7": number;
  "8": number;
  "9": number;
  "10": number;
  "11": number;
  "12": number;
  "13": number;
  "14": number;
  "15": number;
  "16": number;
  "17": number;
  "18": number;
  "19": number;
  "20": number;
  "21": number;
  "22": number;
  "23": number;
  "24": number;
  "25": number;
  "26": number;
  "27": number;
  "28": number;
  "29": number;
  "30": number;
  "31": number;
}

export interface ReportingTokenInfo {
  reportingToken: any[];
  version: number;
  reportingTag: any[];
}

export interface Id2 {
  fromMe: boolean;
  remote: string;
  id: string;
  participant: string;
  _serialized: string;
}

// GroupChat
export interface GroupChat {
  groupMetadata: GroupMetadata;
  id: groupchatId;
  name: string;
  isGroup: boolean;
  isReadOnly: boolean;
  unreadCount: number;
  timestamp: number;
  archived: boolean;
  pinned: boolean;
  isMuted: boolean;
  muteExpiration: number;
}

export interface GroupMetadata {
  id: any[];
  creation: number;
  owner: any[];
  subject: string;
  subjectTime: number;
  desc: string;
  descId: string;
  descTime: number;
  descOwner: any[];
  restrict: boolean;
  announce: boolean;
  noFrequentlyForwarded: boolean;
  ephemeralDuration: number;
  disappearingModeTrigger: string;
  membershipApprovalMode: boolean;
  memberAddMode: string;
  reportToAdminMode: boolean;
  size: number;
  support: boolean;
  suspended: boolean;
  terminated: boolean;
  uniqueShortNameMap: UniqueShortNameMap;
  isLidAddressingMode: boolean;
  isParentGroup: boolean;
  isParentGroupClosed: boolean;
  defaultSubgroup: boolean;
  generalSubgroup: boolean;
  generalChatAutoAddDisabled: boolean;
  allowNonAdminSubGroupCreation: boolean;
  lastActivityTimestamp: number;
  lastSeenActivityTimestamp: number;
  hasCapi: boolean;
  participants: any[];
  pendingParticipants: any[];
  pastParticipants: any[];
  membershipApprovalRequests: any[];
  subgroupSuggestions: any[];
}

export interface UniqueShortNameMap { }

export interface groupchatId {
  server: string;
  user: string;
  _serialized: string;
}
