import { Pool } from "pg";
import config from "../config";

export const pool = new Pool({
  connectionString: config.connection_string,
});

export const initDB = async () => {
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(40) UNIQUE NOT NULL,
        password VARCHAR(70) NOT NULL,
        role VARCHAR(10),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )`,
    );

    await pool.query(
      // may need to add constraint for 20 char desc
      `CREATE TABLE IF NOT EXISTS issues(
        id SERIAL PRIMARY KEY,
        title VARCHAR(20),
        description VARCHAR(60),
        type VARCHAR(10),
        status VARCHAR(10),
        reporter_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )`,
    );
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
