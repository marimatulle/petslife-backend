export interface jwtPayload {
  id: number;
  name: string;
  username: string;
  email: string;
  iat?: number;
  exp?: number;
}
