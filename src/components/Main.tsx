import { signOut } from "@astro-auth/client";
import { ReactStateStore } from "@astro-auth/client";

const Main = ({user}) => {
  const user1 = ReactStateStore.useUser({ update: true });

  return (
    <div>
      
    {user && <button
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>}

      <pre>{JSON.stringify(user)}</pre>
      <pre>{JSON.stringify(user1)}</pre>
    </div>
  );
};

export default Main;
