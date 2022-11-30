import Message from "./Message";

const MessagesList = ({ messages, myUsername }) => {
    return (
        <div className="messages__container-root">
            <div className="messages__container">
                {messages.map((message) => {
                    return (
                        <Message
                            key={message.id}
                            message={message}
                            isMe={message.username === myUsername}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default MessagesList;
