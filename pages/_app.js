import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full min-h-screen p-10 bg-blue-600">
      <div className="max-w-2xl mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
