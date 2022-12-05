import { useState } from "react";
import ChatSection from "./lib/ChatSection";
import MessagesSection from "./lib/MessagesSection";

function App() {
    let myUsername = "refrigerator2k";

    const getMessagesForChat = (id) => {
        if (id === 1) {
            return [
                {
                    id: 0,
                    username: "refrigerator2k",
                    text: "Лента треугольники ыыы",
                    avatar: "https://sun1-98.userapi.com/s/v1/ig2/8DS_zAaCd-vq2H3Ydeoy2RISSkvwVTD-Gf7PK3fweg7yblRBYVPNlWYF8jQ6vGgVTdMwc7P88N7PXuWyG1h3l50g.jpg?size=50x50&quality=95&crop=5,362,1074,1074&ava=1",
                    time: "12:52",
                },
                {
                    id: 1,
                    username: "refrigerator2k",
                    text: "А давай я тебе расскажу про контроллеры",
                    avatar: "https://sun1-98.userapi.com/s/v1/ig2/8DS_zAaCd-vq2H3Ydeoy2RISSkvwVTD-Gf7PK3fweg7yblRBYVPNlWYF8jQ6vGgVTdMwc7P88N7PXuWyG1h3l50g.jpg?size=50x50&quality=95&crop=5,362,1074,1074&ava=1",
                    time: "12:52",
                },
                {
                    id: 2,
                    username: "sirpavidlo",
                    text: "Давай",
                    avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cfKMrZ5qGVd8KH_U3AVXrAHaHa%26pid%3DApi&f=1&ipt=8a02558f8f850ffded72292da8e0b402614a672070109ee447720ae4a3c1d434&ipo=images",
                    time: "12:52",
                },
            ];
        } 
        else if (id === 2) {
            return [
                {
                    id: 0,
                    username: "refrigerator2k",
                    text: "Extra chat",
                    avatar: "https://sun1-98.userapi.com/s/v1/ig2/8DS_zAaCd-vq2H3Ydeoy2RISSkvwVTD-Gf7PK3fweg7yblRBYVPNlWYF8jQ6vGgVTdMwc7P88N7PXuWyG1h3l50g.jpg?size=50x50&quality=95&crop=5,362,1074,1074&ava=1",
                    time: "12:52",
                },
                {
                    id: 1,
                    username: "refrigerator2k",
                    text: "Экстра чат",
                    avatar: "https://sun1-98.userapi.com/s/v1/ig2/8DS_zAaCd-vq2H3Ydeoy2RISSkvwVTD-Gf7PK3fweg7yblRBYVPNlWYF8jQ6vGgVTdMwc7P88N7PXuWyG1h3l50g.jpg?size=50x50&quality=95&crop=5,362,1074,1074&ava=1",
                    time: "13:54",
                },
                {
                    id: 2,
                    username: "refrigerator2k",
                    text: "Чат",
                    avatar: "https://sun1-98.userapi.com/s/v1/ig2/8DS_zAaCd-vq2H3Ydeoy2RISSkvwVTD-Gf7PK3fweg7yblRBYVPNlWYF8jQ6vGgVTdMwc7P88N7PXuWyG1h3l50g.jpg?size=50x50&quality=95&crop=5,362,1074,1074&ava=1",
                    time: "16:90",
                },
            ];
        }
        else if (id === 3) {
            return [
                {
                    id: 0,
                    username: "vveriqavv",
                    text: "Ква ква",
                    avatar: "https://sun1-95.userapi.com/s/v1/ig2/uwuNpQ4NOo7e_9HfG7XyPlIS9yK0zq2_uMIjrsedHqNKbSI20k7M7YyWLpp_63Q5oh7U956_anlzs6G1WfW-138E.jpg?size=50x50&quality=95&crop=236,416,1356,1356&ava=1",
                    time: "12:52",
                },
                {
                    id: 1,
                    username: "vveriqavv",
                    text: "Ква",
                    avatar: "https://sun1-95.userapi.com/s/v1/ig2/uwuNpQ4NOo7e_9HfG7XyPlIS9yK0zq2_uMIjrsedHqNKbSI20k7M7YyWLpp_63Q5oh7U956_anlzs6G1WfW-138E.jpg?size=50x50&quality=95&crop=236,416,1356,1356&ava=1",
                    time: "12:52",
                },
                {
                    id: 2,
                    username: "refrigerator2k",
                    text: "не квакай",
                    avatar: "https://sun1-98.userapi.com/s/v1/ig2/8DS_zAaCd-vq2H3Ydeoy2RISSkvwVTD-Gf7PK3fweg7yblRBYVPNlWYF8jQ6vGgVTdMwc7P88N7PXuWyG1h3l50g.jpg?size=50x50&quality=95&crop=5,362,1074,1074&ava=1",
                    time: "12:52",
                },
            ];
        }
        else {
            return [
                {
                    id: 0,
                    username: "refrigerator2k",
                    text: "Неизвестный чат",
                    avatar: "https://sun1-98.userapi.com/s/v1/ig2/8DS_zAaCd-vq2H3Ydeoy2RISSkvwVTD-Gf7PK3fweg7yblRBYVPNlWYF8jQ6vGgVTdMwc7P88N7PXuWyG1h3l50g.jpg?size=50x50&quality=95&crop=5,362,1074,1074&ava=1",
                    time: "12:00",
                },
            ];
        }
    }

    let [messages, setMessages] = useState();

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
            avatar: "https://sun1-98.userapi.com/s/v1/ig2/8DS_zAaCd-vq2H3Ydeoy2RISSkvwVTD-Gf7PK3fweg7yblRBYVPNlWYF8jQ6vGgVTdMwc7P88N7PXuWyG1h3l50g.jpg?size=50x50&quality=95&crop=5,362,1074,1074&ava=1",
            time: `${date.getHours()}:${date.getMinutes()}`,
        };

        addMessage(message);
    };

    const addMessage = (message) => {
        setMessages([...messages, message]);
    };

    const onChatSelected = (id) => {
        let activeChat = null;
        setChats(
            chats.map((chat) => {
                if (chat.id === id) {
                    activeChat = chat;
                }
                return { ...chat, active: chat.id === id };
            })
        );

        setMessages(getMessagesForChat(activeChat.id));

        setActiveChat(activeChat);
    };

    return (
        <main>
            <ChatSection chats={chats} onChatClicked={onChatSelected} />
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
