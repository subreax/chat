import { useState } from "react";
import ChatListSection from "./lib/ChatListSection";
import MessagesSection from "./lib/MessagesSection";

function App() {
    let myUsername = "refrigerator2k";

    let [messages, setMessages] = useState([
        {
            id: 0,
            username: "refrigerator2k",
            text: "Лента треугольники ыыы",
            avatar: "/src/assets/avatar-refrigerator2k.jpg",
            time: "12:52",
        },
        {
            id: 1,
            username: "refrigerator2k",
            text: "А давай я тебе расскажу про контроллеры",
            avatar: "/src/assets/avatar-refrigerator2k.jpg",
            time: "12:52",
        },
        {
            id: 2,
            username: "sirpavidlo",
            text: "Давай",
            avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cfKMrZ5qGVd8KH_U3AVXrAHaHa%26pid%3DApi&f=1&ipt=8a02558f8f850ffded72292da8e0b402614a672070109ee447720ae4a3c1d434&ipo=images",
            time: "12:52",
        },
    ]);

    let [chats, setChats] = useState([
        {
            id: 1,
            avatar: "",
            title: "Soso has done",
            last_sender: "refrigerator2k",
            last_message: "Лорем ипсум долор сит амет",
        },
        {
            id: 2,
            avatar: "",
            title: "Chat #2",
            last_sender: "refrigerator2k",
            last_message: "Лорем ипсум долор сит амет",
        },
        {
            id: 3,
            avatar: "",
            title: "Extra chat",
            last_sender: "refrigerator2k",
            last_message: "Лорем ипсум долор сит амет",
        },
    ]);

    let [activeChat, setActiveChat] = useState();

    const onSendMessage = (text) => {
        const date = new Date();

        let message = {
            id: date.getMilliseconds(),
            username: localStorage.getItem("username"),
            text: text,
            avatar: "/src/assets/avatar-refrigerator2k.jpg",
            time: `${date.getHours()}:${date.getMinutes()}`,
        };

        addMessage(message);
    };

    const addMessage = (message) => {
        setMessages([...messages, message]);
    };

    const onChatClicked = (id) => {
        let activeChat = null;
        setChats(
            chats.map((chat) => {
                if (chat.id === id) {
                    activeChat = chat;
                }
                return { ...chat, active: chat.id === id };
            })
        );

        setActiveChat(activeChat);
    };

    return (
        <main>
            <ChatListSection chats={chats} onChatClicked={onChatClicked} />
            <MessagesSection
                activeChat={activeChat}
                messages={messages}
                onlineCount={8}
                onSendMessage={onSendMessage}
                myUsername={myUsername}
            />
        </main>
    );
}

export default App;
