import { pool } from "../../db";
import type { IUser } from "../../interfaces/user.interface";

const createUserIntoDB = (payload: IUser) => {
  const { name, email, password, role } = payload;

  const result = pool.query(
    `INSERT INTO users(name,email,password,role) VALUES($1,$2,$3,$4) RETURNING * `,
    [name, email, password, role],
  );
  return result;
};

export const userService = {
  createUserIntoDB,
};
