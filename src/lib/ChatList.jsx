import ChatListItem from "./ChatListItem";

const ChatList = ({ chats, onChatClicked }) => {
    return (
        <>
            {chats.map((chat) => (
                <ChatListItem
                    key={chat.id}
                    chat={chat}
                    onClicked={(id) => onChatClicked(id)}
                />
            ))}
        </>
    );
};
export default ChatList;
