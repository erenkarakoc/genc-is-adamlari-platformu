import { Request, Response } from "express"
import pool from "../models/database"

export const getData = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM data")
    res.json(rows)
  } catch (error) {
    res.status(500).json({ error: "Database query failed" })
  }
}
