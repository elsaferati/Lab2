import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const LiveChat = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [newMsg, setNewMsg] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const chatRef = useRef(null);
    const sender = 'User';

    useEffect(() => {
        fetchMessages();
        const interval = setInterval(fetchMessages, 1500);
        return () => clearInterval(interval);
    }, []);

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

    const handleMouseDown = (e) => {
        setIsDragging(true);
        chatRef.current.startX = e.clientX - position.x;
        chatRef.current.startY = e.clientY - position.y;
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const newX = e.clientX - chatRef.current.startX;
        const newY = e.clientY - chatRef.current.startY;
        setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    });

    return (
        <div
            ref={chatRef}
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                width: '320px',
                minHeight: '300px',
                resize: 'both',
                overflow: 'hidden',
                zIndex: 1000
            }}
            className="bg-white border rounded-lg shadow-xl text-black"
        >
            <div
                onMouseDown={handleMouseDown}
                className="p-3 cursor-move bg-pink-600 text-white font-semibold flex justify-between items-center rounded-t-lg"
            >
                💬 Live Chat
                <button onClick={onClose} className="text-white text-lg hover:text-gray-200">×</button>
            </div>
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
