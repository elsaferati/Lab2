import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LiveChat = () => {
    const [messages, setMessages] = useState([]);
    const [newMsg, setNewMsg] = useState('');
    const sender = 'User';

    const fetchMessages = async () => {
        try {
            const res = await axios.get('http://localhost/livechat/getMessages.php');
            setMessages(res.data);
        } catch (error) {
            console.error("Error fetching messages", error);
        }
    };

    const sendMessage = async () => {
        if (!newMsg.trim()) return;
        try {
            await axios.post('http://localhost/livechat/sendMessage.php', {
                sender,
                message: newMsg
            });
            setNewMsg('');
            fetchMessages();
        } catch (error) {
            console.error("Error sending message", error);
        }
    };

    useEffect(() => {
        fetchMessages();
        const interval = setInterval(fetchMessages, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-4 right-4 w-80 bg-white border rounded-lg shadow-lg text-black z-50">
            <div className="p-3 bg-pink-600 text-white font-semibold rounded-t-lg">💬 Live Chat</div>
            <div className="p-3 h-60 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className="mb-2">
                        <strong>{msg.sender}:</strong> {msg.message}
                    </div>
                ))}
            </div>
            <div className="flex p-2 border-t">
                <input
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                    className="flex-1 border rounded p-2 mr-2"
                    placeholder="Type your message..."
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-500 text-white px-3 rounded hover:bg-blue-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default LiveChat;
