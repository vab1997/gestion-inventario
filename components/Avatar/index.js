import useUser, { USER_STATE } from "hooks/useUser";

export default function Avatar() {
  const user = useUser();

  return (
    <>
      {user === USER_STATE.NOT_KNOW && null}
      {user && (
        <div>
          {user.photoURL ? (
            <img src={user.photoURL} alt={user.displayName} />
          ) : null}
          <strong>{user.displayName}</strong>
        </div>
      )}
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
        }
        img {
          border-radius: 9999px;
          height: 49px;
          width: 49px;
        }
        img + strong {
          margin-left: 8px;
        }
      `}</style>
    </>
  );
}
