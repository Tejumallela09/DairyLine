import "../../chats.css";
const UserChatComponent = () => {
    return (
        <>
            <input type="checkbox" id="check" />
            <label className="chat-btn" htmlFor="check">
                <i className="bi bi-chat-left-dots-fill comment"></i>
                <span className="position-absoulute top-0 start-10
                translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                <i className="bi bi-x-circle-fill close"></i>
            </label>
            <div className="chat-wrapper">
                <div className="chat-header">
                    <h6>Let's chat - Online</h6>
                </div>
                <div className="chat-form">
                    <div className="cht-msg">
                        {
                            Array.from({ length: 20 }).map((_, id) =>
                                <div>
                                    <p>Chat history</p>
                                    <p>
                                        <p className="bg-primary p-3 ms-2 text-light rounded-pill">
                                            <b>Support wrote:</b> Hello,World!This is a toast message.
                                        </p>
                                    </p>
                                </div>

                            )
                        }
                    </div>
                </div>
                <textarea id="clientChatMsg" className="form-control" placeholder="Your Text Message"></textarea>
                <button className="btn btn-success btn-block">Submit</button>
            </div>
        </>
    )
};
export default UserChatComponent;