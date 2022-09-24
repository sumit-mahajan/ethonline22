import { login } from "../api/login";
import { verify } from "../queries/auth/verify_jwt";
import { explorePublications } from "../queries/publication/explore_publications";

const Login = () => {
  return (
    <>
      <button
        className="bg-slate-500 rounded-sm p-1 ml-5 mt-5"
        onClick={() => login("0x3EE8d84ad9082DeC4fc9dEadAB3A63B4AfecF87d")}
      >
        Login
      </button>
      <button
        className="bg-slate-500 rounded-sm p-1 ml-5 mt-5"
        onClick={() => {
          verify(localStorage.getItem("access_token"));
        }}
      >
        Verify
      </button>
      <button
        className="bg-slate-500 rounded-sm p-1 ml-5 mt-5"
        onClick={async () => {
          console.log(
            await explorePublications({
              sortCriteria: "TOP_COMMENTED",
              publicationTypes: ["POST", "MIRROR"],
              limit: 10,
              // also dont forget you can filter these queries on sources as well
              // "sources": ["lost-place-dapp"]
              // you can also pass in from which date you wish to start the explore from
              // if nothing is passed it will use a week before
              // "timestamp": 1645469133705
              // if you do not want it to be random each time
              // "noRandomize": true
              // if you want to exclude certain profiles from appearing in results
              // "excludeProfileIds": ["0x01"]
            })
          );
        }}
      >
        Explore Publications
      </button>
    </>
  );
};

export default Login;
