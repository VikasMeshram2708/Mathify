
interface Message {
  role: string;
  content: string;
}

interface ResponseData {
  id: string;
  messages: Message[];
}


export const getLastMessage = (response: ResponseData): Message | null => {
    if (!response || !Array.isArray(response.messages) || response.messages.length === 0) {
        return null; // Return null if there are no messages
    }
    return response.messages[response.messages.length - 1]; // Return the last message
};