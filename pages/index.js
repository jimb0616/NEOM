import Head from "next/head";
import NeomChatbot from "@/components/NeomChatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Head>
        <title>Neom Chatbot</title>
        <meta name="description" content="Chat with the Neom City AI assistant" />
      </Head>
      
      <h1 className="text-3xl font-bold mb-6">Welcome to Neom Chatbot</h1>
      <NeomChatbot />
    </div>
  );
}
