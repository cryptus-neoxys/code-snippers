import { deleteSnippet } from "../../utils/Fauna";
export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ msg: "Method not allowed" });
  }
  const { id } = req.body;

  try {
    const deletedSnippet = await deleteSnippet(id);
    return res.status(200).json(deletedSnippet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong." });
  }
}
