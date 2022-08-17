import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_API_TOKEN })

const databaseId = process.env.NOTION_DATABASE_ID

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const { firstName, lastName, alergias, bus1, bus2, bus3, bus4 }: FormParams =
    req.body

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
      "Bus-Alcazar-Iglesia": {
        type: "checkbox",
        checkbox: !!bus1,
      },
      "Bus-Iglesia-Montaña": {
        type: "checkbox",
        checkbox: !!bus2,
      },
      "Bus-Montaña-Iglesia": {
        type: "checkbox",
        checkbox: !!bus3,
      },
      "Bus-Iglesia-Alcazar": {
        type: "checkbox",
        checkbox: !!bus4,
      },
    },
  })

  res.send(JSON.stringify({ message: response }))
}
