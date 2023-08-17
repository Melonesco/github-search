import { UserDisplayProps } from "../types";

const UserDisplay = ({ user }: UserDisplayProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        <button>Go to User Page</button>
      </a>
      <div style={{ marginLeft: "20px" }}>
        <h2>{user.name || user.login}</h2>
        <p>Email: {user.email || "Not available"}</p>
        <img src={user.avatar_url} alt={user.name || user.login} width="100" />
      </div>
    </div>
  );
};

export default UserDisplay;
