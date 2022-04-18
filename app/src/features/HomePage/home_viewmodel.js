import { Subject } from 'rxjs';

import * as repository from 'services/repository';

const subject = new Subject();
let chatTree;

export const { isUserSignedIn } = repository;
export const { signOut } = repository;

export function getChatDataObservable(otherUserId) {
  if (chatTree) {
    if (chatTree.messages.selectedUser !== otherUserId) {
      chatTree.messages.selectedUser = otherUserId;
      subject.next(chatTree);
    }
  }
  if (!chatTree) {
    repository.getChatPg().then((value) => {
      chatTree = formatChatPgData(value);
      subject.next(chatTree);
    });
  }
  return subject;
}

function formatChatPgData(data, selectedUserId) {
  const formattedData = {
    profile: data.profile,
    users: data.users,
    chat: {
      selectedUser: selectedUserId ?? data.users[0]?.id,
    },
  };
  const messages = data.users[0]?.messages;
  if (messages) {
    formattedData.chat.dates = formatChat(messages, data);
  }
  return formattedData;
}

function formatChat(messages, data) {
  const dates = [];
  messages.forEach((m) => {
    const createdAt = new Date(Date.parse(m.createdAt));
    const dateGroup = dates.find((d) => d.date.getDate() - createdAt.getDate() === 0);
    if (dateGroup) {
      dateGroup.messageGroups.push(m);
    } else {
      dates.push({ date: createdAt, messageGroups: [m] });
    }
  });

  dates.forEach((d) => {
    d.messageGroups = formatMessages(
      d.messageGroups,
      [data.profile, ...data.users],
      data.profile.id,
    );
  });

  return dates;
}

function formatMessages(messages, users, selfId) {
  const messageGroups = [];
  let userId;
  messages.forEach((m) => {
    if (m.senderId === userId) {
      const lastGroup = messageGroups[messageGroups.length - 1];
      lastGroup.messages.push(m);
    } else {
      userId = m.senderId;
      const { name } = users.find((u) => u.id === m.senderId);
      messageGroups.push({ messages: [m], name, self: m.senderId === selfId });
    }
  });
  return messageGroups;
}

export function selectUser(userId) {
  chatTree.chat.selectedUser = userId;
  chatTree.chat.dates = [];
  subject.next(chatTree);
  repository.getMessages(userId).then((value) => {
    chatTree.chat.dates = formatChat(value, chatTree);
    subject.next(chatTree);
  });
}

export function dispose() { }
