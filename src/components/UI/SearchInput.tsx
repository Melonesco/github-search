import { SearchInputProps } from "../types";

const SearchInput = ({
  username,
  onUsernameChange,
  onSearch,
}: SearchInputProps) => {
  return (
    <div>
      <input
        value={username}
        onChange={(e) => onUsernameChange(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
