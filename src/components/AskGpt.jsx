import { useState } from "react";
import { askGpt } from "../../lib/openia";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await askGpt(input);
      setResponse(res);
    } catch (error) {
      console.error(error);
      setResponse("Error: No se pudo completar la solicitud.");
    }
  };

  return (
    <div className="max-w-md mx-auto m-24">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Enviar
        </button>
      </form>
      <div className="bg-gray-200 p-4 rounded mt-4">
        <p
          className="text-gray-800 text-center
text-xl
        "
        >
          {response}
        </p>
      </div>
    </div>
  );
}
