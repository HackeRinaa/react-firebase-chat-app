import "./detail.css";

const Detail = () => {
    return (
      <div className="detail">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <h2>Jane Doe</h2>
          <p>Lorem ispum dolor sit amet.</p>
        </div>
        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Privacy & Help</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Photos</span>
              <img src="./arrowDown.png" alt="" />
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="https://dummyimage.com/600x400/000/fff" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img src="./download.png" alt="" className="icon"/>
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="https://dummyimage.com/600x400/000/fff" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img src="./download.png" alt="" className="icon"/>
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="https://dummyimage.com/600x400/000/fff" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img src="./download.png" alt="" className="icon"/>
              </div>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Files</span>
              <img src="./arrowDown.png" alt="" />
            </div>
          </div>
          <button>Block User</button>
          <button>Logout</button>
        </div>
      </div>
    );
};

export default Detail;