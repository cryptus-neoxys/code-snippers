import { getSnippetById, updateSnippet } from "../../utils/Fauna";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(req, res) {
  const session = getSession(req, res);
  const userId = session.user.sub;

  const { id } = req.body;
  const dbRecord = await getSnippetById(id);

  if (!dbRecord || dbRecord.data.userId !== userId) {
    return res.status(401).json({ msg: "Cannot delete" });
  }

  if (req.method !== "PUT") {
    return res.status(405).json({ msg: "Method not allowed" });
  }
  const { code, language, description, name } = req.body;

  try {
    const updatedSnippet = updateSnippet(id, code, language, description, name);
    return res.status(200).json(updatedSnippet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong." });
  }
});
