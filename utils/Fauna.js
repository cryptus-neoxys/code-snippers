const fauna = require("faunadb");
const faunaClient = new fauna.Client({ secret: process.env.FAUNA_SECRET });
const q = fauna.query;

const getSnippets = async () => {
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collections("snippets"))),
      q.Lambda("ref", q.Get(q.Var("ref")))
    )
  );

  return data;
};

const getSnippetsByLanguage = async (language) => {
  const { data } = faunaClient.query(
    q.Map(
      q.Paginate(q.Match(q.Index("snippets_by_language"), language)),
      q.Lambda("ref", q.Get(q.Var("ref")))
    )
  );

  return data;
};

module.exports = {
  getSnippets,
  getSnippetsByLanguage,
};
