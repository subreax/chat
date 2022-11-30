import { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
    const [msgText, setMsgText] = useState("");

    const sendMsg = (e) => {
        e.preventDefault();
        onSendMessage(msgText);
        setMsgText("");
    };

    return (
        <form className="messages__input" onSubmit={sendMsg}>
            <input
                type="text"
                name="msg"
                value={msgText}
                onChange={(e) => setMsgText(e.target.value)}
                placeholder="Enter the message"
            ></input>
            <button className="fa-solid fa-chevron-right"></button>
        </form>
    );
};
export default MessageInput;
