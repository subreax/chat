const ChatList = ({ chats }) => {
    return (
        <section className="chat-list">
            <form className="chat-list__header-search">
                <input
                    type="text"
                    name="group-search"
                    class="input--rounded"
                    placeholder="Search group by name"
                />
                <i className="fa-solid fa-search"></i>
            </form>

            {chats.map((chat) => (
                <div className="chat-listitem">
                    {/* TODO */}
                    <div className="avatar"></div>

                    <div className="chat-listitem__info">
                        <h4>{chat.name}</h4>
                        <h5><span className="chat-listitem__info__sender">{chat.last_sender}</span>: {chat.last_message}</h5>
                    </div>
                </div>
            ))}
        </section>
    );
};
export default ChatList;
