import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_API_TOKEN })

const databaseId = process.env.NOTION_DATABASE_ID || ""

const createRow = async ({ firstName, lastName, alergias, common }) =>
  await notion.pages.create({
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
      ...common,
    },
  })

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const {
    firstName,
    lastName,
    alergias,
    bus2,
    bus3,
    withPlus,
    plusFirstName,
    plusLastName,
    plusAlergias,
    children = [],
  }: FormParams = req.body

  const common = {
    "Bus-Iglesia-Montaña": {
      type: "checkbox",
      checkbox: !!bus2,
    },
    "Bus-Montaña-Iglesia": {
      type: "checkbox",
      checkbox: !!bus3,
    },
    "Va con": {
      type: "rich_text",
      rich_text: [
        {
          type: "text",
          text: {
            content: `${firstName} ${lastName}`,
          },
        },
      ],
    },
  }

  await createRow({ firstName, lastName, alergias, common })

  if (withPlus) {
    await createRow({
      firstName: plusFirstName,
      lastName: plusLastName,
      alergias: plusAlergias,
      common,
    })
  }

  children.map(async child => {
    await createRow({
      firstName: child.firstName,
      lastName: child.lastName,
      alergias: child.alergias,
      common,
    })
  })

  res.send(JSON.stringify({ message: "ok" }))
}
