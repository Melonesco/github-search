import { GithubUser } from "../store/types";

export interface SearchInputProps {
  username: string;
  onUsernameChange: (username: string) => void;
  onSearch: () => void;
}

export interface UserDisplayProps {
  user: GithubUser;
}

export interface ErrorStateProps {
  errorMessage: string;
}
