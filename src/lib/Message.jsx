const Message = ({ message, isMe }) => {
    return (
        <div className={`message  ${isMe ? "message--me" : ""}`}>
            <div className="avatar--medium">
                <img src={message.avatar} alt="Ава" />
            </div>
            <div className="message__info">
                <p className="message__title">
                    <span className="message__username">
                        {message.username}
                    </span>
                    <span className="message__time">
                        {message.time}
                    </span>
                </p>
                <p className="message__text">
                    {message.text}
                </p>
            </div>
        </div>
    );
};

Message.defaultProps = {
    isRightAligned: false
}

export default Message;
