export const jwtConstants = {
  secret: (() => {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET not set in environment');
    }
    return process.env.JWT_SECRET;
  })(),
};
