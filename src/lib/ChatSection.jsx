import ChatList from "./ChatList";
import ChatListHeader from "./ChatListHeader";

const ChatListSection = ({ flex, chats, onChatClicked, onAddChatClicked }) => {
    return (
        <section className="chat-section" style={{ flex: flex }}>
            <ChatListHeader onAddChatClicked={onAddChatClicked} />
            <ChatList chats={chats} onChatClicked={onChatClicked} />
        </section>
    );
};

ChatListSection.defaultProps = {
    flex: 1,
    onChatClicked: () => 0,
};

export default ChatListSection;
