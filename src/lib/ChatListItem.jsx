const ChatListItem = ({ chat, onClicked }) => {
    return (
        <div
            className={`chat-listitem ${chat.active && "chat-listitem--active"}`}
            onClick={() => onClicked(chat.id)}
        >
            <div className="avatar"></div>

            <div className="chat-listitem__info">
                <h4 className="chat-listitem__title">{chat.title}</h4>
                <h5>
                    <span className="chat-listitem__sender">{chat.last_sender}:</span>
                    <span className="chat-listitem__lastmsg">{chat.last_message}</span>
                </h5>
            </div>
        </div>
    );
};
export default ChatListItem;
