interface User {
  id: string;
}

export interface IContext {
  authToken: string | null;
  user: User | null;
}
