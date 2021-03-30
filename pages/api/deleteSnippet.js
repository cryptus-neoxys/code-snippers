import { deleteSnippet, getSnippetById } from "../../utils/Fauna";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(req, res) {
  const session = getSession(req, res);
  const userId = session.user.sub;

  if (req.method !== "DELETE") {
    return res.status(405).json({ msg: "Method not allowed" });
  }
  const { id } = req.body;
  const dbRecord = await getSnippetById(id);

  if (!dbRecord || dbRecord.data.userId !== userId) {
    return res.status(401).json({ msg: "Cannot delete" });
  }

  try {
    const deletedSnippet = await deleteSnippet(id);
    return res.status(200).json(deletedSnippet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong." });
  }
});
