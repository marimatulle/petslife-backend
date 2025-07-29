export interface jwtPayload {
  id: number;
  name: string;
  username: string;
  email: string;
  crmv?: string;
  iat?: number;
  exp?: number;
}
