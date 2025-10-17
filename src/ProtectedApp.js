import React, { useState } from "react";

function ProtectedApp({ children }) {
  const branch = process.env.REACT_APP_VERCEL_GIT_COMMIT_REF;
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  console.log("🔍 Branch:", branch);
  console.log("🔍 Environment:", process.env.NODE_ENV);
  console.log("🔍 Preview Password (should be hidden in console):", process.env.REACT_APP_PREVIEW_PASSWORD ? "Set ✅" : "Missing ❌");

  if (process.env.NODE_ENV === "development") {
    return <>{children}</>;
  }

  if (branch !== "main" && !isAuthorized) {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === process.env.REACT_APP_PREVIEW_PASSWORD) {
        setIsAuthorized(true);
      } else {
        alert("Incorrect password");
      }
    };

    return (
      <div style={{ textAlign: "center", marginTop: "10%" }}>
        <h2>Restricted Access</h2>
        <p>This deployment is private. Please enter the password to continue.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "8px", marginRight: "5px" }}
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}

export default ProtectedApp;
