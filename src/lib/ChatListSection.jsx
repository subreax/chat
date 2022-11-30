import ChatListItem from "./ChatListItem";

const ChatListSection = ({ flex, chats, onChatClicked }) => {
    return (
        <section className="chat-list">
            <form className="chat-list__header-search">
                <input
                    type="text"
                    name="group-search"
                    className="input--rounded"
                    placeholder="Search group by name"
                />
                <i className="fa-solid fa-search"></i>
            </form>

            {chats.map((chat) => <ChatListItem key={chat.id} chat={chat} onClicked={(id) => onChatClicked(id)} />)}
        </section>
    );
};

ChatListSection.defaultProps = {
    flex: 1,
    onChatClicked: () => 0
}

export default ChatListSection;
