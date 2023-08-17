export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  name?: string;
  html_url?: string;
  email?: string | null;
}

export interface GithubUserState {
  user: GithubUser | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
