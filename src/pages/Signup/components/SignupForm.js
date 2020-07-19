import React, { useState } from "react";
import { app } from "../../../index";
import { loginAccountWithGoogle } from "../../../utils/firebase-util";

export default ({ show, onClickCategory }) => {
  const [username, setUsername] = useState("");

  // methods
  const loginWithGoogleAccount = async () => {
    const response = await loginAccountWithGoogle();
    console.log(response);
  };

  return (
    <form>
      <div>
        <label>id:</label>
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label>pw:</label>
        <input type="text" />
      </div>
      <div>
        <button type="submit">login</button>
        <button
          style={buttonTempStyle}
          type="button"
          onClick={loginWithGoogleAccount}
        >
          Google login
        </button>
      </div>
    </form>
  );
};

const buttonTempStyle = {
  color: "white",
};
