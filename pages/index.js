import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const responses = {
  "what is neom?": "NEOM is a $500 billion mega-city project in Saudi Arabia, part of Vision 2030, aiming to create a futuristic, sustainable city powered by renewable energy.",
  "what are the challenges neom faces?": "NEOM faces financial setbacks, leadership changes, environmental concerns, and social challenges, including forced relocations and concerns over worker conditions.",
  "what is the line?": "The Line is a proposed 170 km-long city of two parallel skyscrapers, designed to be a high-tech urban environment with minimal environmental impact. However, its size has been significantly reduced in recent plans.",
  "will neom be completed?": "While Saudi Arabia remains committed to NEOM as part of its Vision 2030, financial constraints and logistical challenges raise doubts about its full completion as originally envisioned.",
  "how is neom powered?": "NEOM is planned to run entirely on renewable energy sources, including solar, wind, and hydrogen fuel cells, with advanced energy storage and smart grid technologies.",
  "how will neom impact the environment?": "NEOM aims for sustainability, but experts question the feasibility of constructing such a massive city in a desert without significant environmental disruption."
};

export default function NeomChatbot() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    const userMessage = input.toLowerCase();
    const response = responses[userMessage] || "I'm not sure about that. Ask something else about NEOM!";
    setChat([...chat, { sender: "You", text: input }, { sender: "Bot", text: response }]);
    setInput("");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">NEOM Chatbot</h1>
      <Card className="mb-4 p-4 h-96 overflow-y-auto border border-gray-300">
        <CardContent>
          {chat.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === "You" ? "text-right" : "text-left"}`}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about NEOM..."
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
}

