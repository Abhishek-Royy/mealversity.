import React, { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const ChatBot = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://ai.technorapide.com/webhook/49c189dd-5664-4496-9cbe-e2cb39423851/chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      loadPreviousSession: true,
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        'Hi there! 👋',
        'My name is Diya from Mealversity. How can I assist you today?'
      ],
      i18n: {
        en: {
          title: 'Hi there! 👋',
          subtitle: "Start a chat. We're here to help you 24/7.",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your question...',
        },
      },
      enableStreaming: false,
    });
  }, []);

  return null; // This component doesn't render anything visible
};

export default ChatBot;