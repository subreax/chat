import React from "react";
import Message from "./Message";

/*const MessagesList = ({ messages, myUsername }) => {
    
};*/

class MessagesList extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    render() {
        return (
            <div className="messages__container-root" ref={this.containerRef}>
                <div className="messages__container">
                    {this.props.messages.map((message) => {
                        return (
                            <Message
                                key={message.id}
                                message={message}
                                isMe={
                                    message.username === this.props.myUsername
                                }
                            />
                        );
                    })}
                </div>
            </div>
        );
    }

    componentDidUpdate() {
        const el = this.containerRef.current;
        el.scrollTo(0, el.scrollHeight);
    }
}

export default MessagesList;
