import { signIn, signOut } from "@astro-auth/client";

const Main = ({user}) => {

  return (
    <div>
     {/* {!user && <button
        onClick={() => {
          signIn({
            provider: "google",
          });
        }}
      >
        Sign In
      </button>} */}
    {user && <button
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>}

      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default Main;
