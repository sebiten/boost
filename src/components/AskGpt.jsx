import { useCallback, useState } from "react";
import axios from "axios";
import OpenAI from "openai-api";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addChatLogMessage = useCallback(
    (message) => {
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: "user", message: message },
      ]);
    },
    [setChatLog]
  );

  const sendMessage = useCallback(
    (message) => {
      setIsLoading(true);
      axios
        .post("/api/chat", {
          model: "gpt-3.5-turbo-0301",
          messages: [{ role: "user", content: message }],
        })
        .then((response) => {
          const botMessage = response.data.choices[0].message.content;
          addChatLogMessage(botMessage);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [addChatLogMessage]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      addChatLogMessage(inputValue);
      sendMessage(inputValue);
      setInputValue("");
    },
    [inputValue, addChatLogMessage, sendMessage]
  );

  return (
    <div
      className="flex flex-col my-32 mx-auto w-1/2 "
    >
      <div>
        {chatLog.map((log, index) => (
          <div key={index}>
            {log.type === "user" ? (
              <p>User: {log.message}</p>
            ) : (
              <p>Bot: {log.message}</p>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
        focus:outline-none
        focus:shadow-outline"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Chat;
