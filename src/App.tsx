import { useState } from "react";
import { useSelector } from "react-redux";
import ErrorState from "./components/Status/ErrorState";
import LoadingState from "./components/Status/LoadingState";
import UserDisplay from "./components/User/UserDisplay";
import { fetchUser } from "./store/githubUserSlice";
import { useAppDispatch, RootState } from "./store/store";
import SearchInput from "./components/UI/SearchInput";

function App() {
  const [username, setUsername] = useState<string>("");
  const dispatch = useAppDispatch();

  const user = useSelector((state: RootState) => state.githubUser.user);
  const status = useSelector((state: RootState) => state.githubUser.status);
  const error = useSelector((state: RootState) => state.githubUser.error);

  const handleSearch = () => {
    dispatch(fetchUser(username));
  };

  return (
    <div className="App">
      <SearchInput
        username={username}
        onUsernameChange={setUsername}
        onSearch={handleSearch}
      />

      {status === "loading" && <LoadingState />}
      {status === "succeeded" && user && <UserDisplay user={user} />}
      {status === "failed" && error && <ErrorState errorMessage={error} />}
    </div>
  );
}

export default App;
