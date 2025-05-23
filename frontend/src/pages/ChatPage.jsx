import React, { useEffect, useState } from "react"
import axios from "axios"
const api_url = import.meta.env.VITE_API_URL


const ChatPage = () => {
    console.log(api_url)
    const [chats,setChats] = useState([]);

    const fetchChats = async () =>{
        // const response = await fetch(`${api_url}/api/chat`);
        // const data = await response.json();

        const { data } = await axios.get(`${api_url}/api/chat`) 
        console.log(typeof(data));
        setChats(data);
    }

    useEffect(()=>{
        fetchChats();
    },[])


    return (
        <div>
            {chats.map((chat) => (
                <p key={chat._id}>{chat.chatName}</p>
            ))}
        </div>
    );
};

export default ChatPage;