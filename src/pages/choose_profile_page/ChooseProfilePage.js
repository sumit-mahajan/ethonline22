import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfiles } from "../../api/profiles";
import Box from "../../components/utils/Box";
import { useConnection } from "../../utils/connection_service";
import "./choose_profile_page.css";

function ChooseProfilePage() {
  const [profilesList, setProfilesList] = useState([]);
  const { accounts, setCurrentUserProfile } = useConnection();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfiles() {
      const result = await getProfiles(accounts[0]);
      setProfilesList(result.items);
      if (!result.items[0]) {
        navigate("/register");
      }
    }
    if (accounts[0]) {
      fetchProfiles();
    }
  }, []);

  return (
    <>
      <main className="container">
        <Box height={110} />
        <p className="title">
          To get started, choose any one of the following profiles registered at
          your address
        </p>
        <Box height={30} />
        {profilesList.map((profile) => (
          <div key={profile.id}>
            <p
              onClick={() => {
                setCurrentUserProfile(profile);
                navigate("/home");
              }}
              className="subtitle-text hover:cursor-pointer"
            >
              {profile.handle}
            </p>
            <Box height={15} />
          </div>
        ))}
      </main>
    </>
  );
}

export default ChooseProfilePage;
