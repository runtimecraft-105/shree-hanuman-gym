
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) {
    return res.status(500).json({
      error: 'Database connection is not configured',
    })
  }

  try {
    const sql = neon(databaseUrl)

    // Create the counter table if it doesn't exist.
    await sql`
      CREATE TABLE IF NOT EXISTS website_stats (
        id TEXT PRIMARY KEY,
        views BIGINT NOT NULL DEFAULT 0
      )
    `

    if (req.method === 'POST') {
      // Increment the shared visitor count.
      const result = await sql`
        INSERT INTO website_stats (id, views)
        VALUES ('total', 1)
        ON CONFLICT (id)
        DO UPDATE SET views = website_stats.views + 1
        RETURNING views
      `

      return res.status(200).json({
        views: Number(result[0].views),
      })
    }

    // GET checks the API and reads the current count.
    const result = await sql`
      SELECT views
      FROM website_stats
      WHERE id = 'total'
    `

    return res.status(200).json({
      views: Number(result[0]?.views ?? 0),
      online: true,
    })
  } catch (error) {
    console.error('Views API error:', error)

    return res.status(500).json({
      error: 'Unable to access the views database',
    })
  }
}
