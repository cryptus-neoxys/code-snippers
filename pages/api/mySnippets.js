import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

import { getSnippetByUser } from "../../utils/Fauna";

export default withApiAuthRequired(async function handler(req, res) {
  const session = getSession(req, res);

  if (req.method !== "GET") {
    return res.status(405);
  }

  const userId = session.user.sub;

  try {
    const snippets = await getSnippetByUser(userId);

    return res.status(200).json(snippets);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Something went wrong" });
  }
});
