const ChatListHeader = ({ onAddChatClicked }) => {
    return (
        <form className="chat-section-header">
            <div className="chat-section-header__search">
                <input
                    type="text"
                    name="group-search"
                    placeholder="Search chat by name"
                />
                <i className="fa-solid fa-search"></i>
            </div>

            <i
                className="fa-solid fa-plus chat-section-header__actionbtn"
                onClick={onAddChatClicked}
            />
        </form>
    );
};
export default ChatListHeader;
