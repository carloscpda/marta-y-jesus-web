import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_API_TOKEN })

const databaseId = process.env.NOTION_DATABASE_ID

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const { firstName, lastName, alergias, bus }: FormParams = req.body

  const response = await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      Name: {
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: `${firstName} ${lastName}`,
            },
          },
        ],
      },
      Alergias: {
        type: "rich_text",
        rich_text: [
          {
            type: "text",
            text: {
              content: alergias,
            },
          },
        ],
      },
      Bus: {
        type: "checkbox",
        checkbox: !!bus,
      },
    },
  })

  res.send(JSON.stringify({ message: response }))
}
