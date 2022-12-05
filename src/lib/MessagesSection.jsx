import MessageInput from "./MessageInput";
import MessagesList from "./MessagesList";

const MessagesSection = ({ flex, activeChat, messages, onlineCount, myUsername, onSendMessage }) => {
    return (
        <>
            {activeChat ? (
                <section className="messages-section-active" style={{flex: flex}}>
                    <div className="msg-header">
                        <h3>{activeChat.title}</h3>
                    </div>
                    
                    <MessagesList messages={messages} myUsername={myUsername} />
                    <MessageInput onSendMessage={onSendMessage} />
                </section>
            ) : (
                <section className="messages-section" style={{flex: flex}}>
                    <h2>Please select the chat</h2>
                </section>
            )}
        </>
    );
};

MessagesSection.defaultProps = {
    flex: 3
}

export default MessagesSection;
