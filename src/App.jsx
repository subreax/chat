import ChatList from "./lib/ChatList";

function App() {
    const chats = [
        {
            id: 1,
            avatar: "",
            name: "Soso has done",
            last_sender: "refrigerator2k",
            last_message: "Лорем ипсум долор сит амет консекутер абсуно кремастер",
        },
        {
            id: 2,
            avatar: "",
            name: "Chat #2",
            last_sender: "refrigerator2k",
            last_message: "Лорем ипсум долор сит амет консекутер абсуно кремастер",
        },
        {
            id: 3,
            avatar: "",
            name: "Extra chat",
            last_sender: "refrigerator2k",
            last_message: "Лорем ипсум долор сит амет консекутер абсуно кремастер",
        }
    ];

    return (
        <>
            <main>
                <ChatList chats={chats} />

                <section className="messages">
                    <div className="messages__header">
                        <h3>Soso has done</h3>
                        <p className="messages__header__online-indicator">
                            online: <span>8</span>
                        </p>
                    </div>
                    <div className="messages__container">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                            return (
                                <div className="message" key={i}>
                                    <div className="avatar--medium avatar--placeholder"></div>
                                    <div className="message__info">
                                        <p className="message__title">
                                            <span className="message__username">
                                                refrigerator2k
                                            </span>
                                            <span className="message__time">
                                                18:05
                                            </span>
                                        </p>
                                        <p className="message-text">
                                            Лорем ипсум долор сит амет
                                            консекутер абсуно кремастер
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <form className="messages__input">
                        <input
                            type="text"
                            name="msg"
                            placeholder="Enter the message"
                        ></input>
                        <button className="fa-solid fa-chevron-right"></button>
                    </form>
                </section>

                {/* <section className="members"></section> */}
            </main>
        </>
    );
}

export default App;
