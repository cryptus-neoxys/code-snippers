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

  const snippets = data.map((snippet) => {
    snippet.id = snippet.ref.id;
    delete snippet.ref;
    return snippet;
  });

  return snippets;
};

const getSnippetsById = async (id) => {
  const snippet = faunaClient.query(q.Get(q.Ref(q.Collection("snippets"), id)));

  snippet.id = snippet.ref.id;
  delete snippet.ref;
  return snippet;
};

const createSnippet = async (code, language, description, name) => {
  return await faunaClient.query(
    q.Create(q.Collection("snippets"), {
      data: { code, language, description, name },
    })
  );
};

const updateSnippet = async (id, code, language, description, name) => {
  return await faunaClient.query(
    q.Update(q.Ref(q.Collection("snippets"), id), {
      data: { code, language, description, name },
    })
  );
};

const deleteSnippet = async (id) => {
  return await faunaClient.query(
    q.Delete(q.Ref(q.Collection("snippetes"), id))
  );
};

module.exports = {
  getSnippets,
  getSnippetsById,
  createSnippet,
  updateSnippet,
  deleteSnippet,
};
