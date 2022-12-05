import React, { useRef } from "react";
import { useEffect } from "react";
import Message from "./Message";

const MessagesList = ({ messages, myUsername }) => {
    let containerRef = useRef();

    const scrollToBottom = () => {
        const el = containerRef.current;
        el.scrollTo(0, el.scrollHeight);
    }

    useEffect(() => {
        scrollToBottom();
    });

    return (
        <div className="messages__container-root" ref={containerRef}>
            <div className="messages__container">
                {messages.map((message) => {
                    return (
                        <Message
                            key={message.id}
                            message={message}
                            isMe={
                                message.username === myUsername
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MessagesList;
