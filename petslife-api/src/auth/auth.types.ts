export interface jwtPayload {
  id: number;
  name: string;
  username: string;
  email: string;
  crmv?: string;
  role: 'user' | 'veterinarian';
  iat?: number;
  exp?: number;
}
