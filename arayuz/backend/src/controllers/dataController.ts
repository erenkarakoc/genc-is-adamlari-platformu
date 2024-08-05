import { Request, Response } from "express"
import pool from "../models/database"

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users")
    res.json(rows)
  } catch (error) {
    res.status(500).json({ error: "Database query failed" })
  }
}
