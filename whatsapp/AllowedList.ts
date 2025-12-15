import config from "../configs/config";

export function AllowedList(msg): boolean {
  let allowed = false;
  const allowedGroups = config.AllowedGroups.split(",").map((group) =>
    group.trim(),
  );
  const allowedNumbers = config.AllowedNumbers.split(",").map((number) =>
    number.trim(),
  );

  if (msg.isGroup) {
    if (allowedGroups.includes(msg.chatId)) {
      allowed = true;
    }
  } else {
    if (allowedNumbers.includes(msg.chatId)) {
      allowed = true;
    }
  }

  return allowed;
}
