import ChatListItem from "./ChatListItem";

const ChatListSection = ({ flex, chats, onChatClicked, onAddChatClicked }) => {
    return (
        <section className="chat-list" style={{ flex: flex }}>
            <form className="chat-list-header">
                <div className="chat-list-header__search">
                    <input
                        type="text"
                        name="group-search"
                        placeholder="Search chat by name"
                    />
                    <i className="fa-solid fa-search"></i>
                </div>

                <i className="fa-solid fa-plus chat-list-header__actionbtn" onClick={onAddChatClicked} />
            </form>

            {chats.map((chat) => (
                <ChatListItem
                    key={chat.id}
                    chat={chat}
                    onClicked={(id) => onChatClicked(id)}
                />
            ))}
        </section>
    );
};

ChatListSection.defaultProps = {
    flex: 1,
    onChatClicked: () => 0,
};

export default ChatListSection;
