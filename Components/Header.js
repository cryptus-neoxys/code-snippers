import { useUser } from "@auth0/nextjs-auth0";

export default function Header({ title, subtitle }) {
  const { user, isLoading, error } = useUser();
  return (
    <header className="my-12">
      <h1 className="text-blue-50 text-2xl">{title}</h1>
      {subtitle && <p className="text-blue-50">{subtitle}</p>}
      {user && !isLoading ? (
        <Link href="/new">
          <a className="hover:bg-blue-900 focus:outline-none focus:shadow-outline inline-block px-4 py-2 mt-3 font-bold text-white bg-blue-700 rounded">
            Create a Snippet!
          </a>
        </Link>
      ) : (
        <Link href="/api/auth/login">
          <a className="hover:bg-blue-900 focus:outline-none focus:shadow-outline inline-block px-4 py-2 mt-3 font-bold text-white bg-blue-700 rounded">
            Login to Create Snippets!
          </a>
        </Link>
      )}
    </header>
  );
}
