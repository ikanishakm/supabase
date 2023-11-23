// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import * as Deno from "https://deno.land/std@0.204.0/http/server.ts"
import { NotionToMarkdown } from "https://raw.githubusercontent.com/5ika/notion-to-md-deno/main/mod.ts"
import { Client } from "https://deno.land/x/notion_sdk@v1.0.4/src/mod.ts"
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
}

Deno.serve(async (req) => {
  const notion = new Client({
    auth: "secret_Ge9fG0z8LMIP8Revv3dTCtkMqziEYiEMZ6x1hRxRlSy",
  })
  const n2m = new NotionToMarkdown({
    notionClient: notion,
  })

  const mdblocks = await n2m.pageToMarkdown("fd39df7580b74c94aa4763ec4375f786")
  const mdString = n2m.toMarkdownString(mdblocks)
  console.log(mdblocks)

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }
  const getNotionData = await fetch(
    "https://api.notion.com/v1/blocks/fd39df7580b74c94aa4763ec4375f786/children?page_size=100",

    {
      method: "GET",
      headers: {
        Authorization: `Bearer secret_Ge9fG0z8LMIP8Revv3dTCtkMqziEYiEMZ6x1hRxRlSy`,
        "Notion-Version": "2022-06-28",
      },
    }
  )
  const notionData = await getNotionData.json()
  const { name } = await req.json()
  const data = {
    message: notionData,
    html: mdString,
  }

  return new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  })
})

// // To invoke:
// curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
