import ProfilePictures from "../../components/profile_pictures/ProfilePictures";
import FilledButton from "../../components/filled_button/FilledButton";
import Box from "../../components/utils/Box";
import InfoField from "../../components/info_field/InfoField";
import { TextField } from "../../components/textfield/TextField";
import "./register_page.css";
import { useRef, useState } from "react";
import { useConnection } from "../../utils/connection_service";
import { useEffect } from "react";
import { getENSDomain } from "../../utils/ethers_service";
import { createProfile, getProfiles } from "../../api/profiles";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function RegisterPage() {
  const { accounts, isLoggedIn } = useConnection();

  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [ensName, setEnsName] = useState("-");

  const usernameRef = useRef();
  const nameRef = useRef();
  const bioRef = useRef();

  const navigate = useNavigate();

  const checkFormError = (e) => {
    return (
      usernameRef.current.getError(e.target.username.value) ||
      nameRef.current.getError(e.target.name.value) ||
      bioRef.current.getError(e.target.bio.value)
    );
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (checkFormError(e)) {
      return;
    }

    try {
      setLoading(true);

      const res = await createProfile(e.target.username.value, null);
      if (res.data.createProfile.reason === "HANDLE_TAKEN") {
        setError("Username already taken");
      }
      // e.target.reset();

      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Sorry, Can't Register");
    }
  };

  useEffect(() => {
    async function fetch() {
      const resp = await getENSDomain(accounts[0]);
      resp && setEnsName(resp);
    }
    if (accounts[0]) {
      fetch();
    }
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [accounts]);

  if (isLoading) {
    return (
      <Loading
        message={"Your Profile is being created. Get back after a while"}
      />
    );
  }

  return (
    <>
      <main className="container">
        <Box height={20} />
        <h1 className="heading">Register</h1>

        <Box height={20} />

        <ProfilePictures />

        <Box height={30} />

        <form autoComplete="off" spellCheck="false" onSubmit={onFormSubmit}>
          <div className="flex">
            <TextField
              ref={usernameRef}
              classes="flex-1"
              fieldName="Username *"
              type="text"
              name="username"
              placeholder="What would you love to be called by?"
              validate={(username) => {
                if (username === "") {
                  return "Your username please!";
                }
              }}
            />

            <Box width={50} />

            <InfoField
              classes="flex-1"
              id="address"
              label={"Address"}
              value={accounts[0]}
            />
          </div>

          <Box height={20} />

          <div className="flex">
            <TextField
              ref={nameRef}
              classes="flex-1"
              fieldName="Name"
              type="text"
              name="name"
              placeholder="What's your name?"
              validate={(name) => {
                // if (name === "") {
                //   return "Your name please!";
                // }
              }}
            />

            <Box width={50} />

            <InfoField
              id="ens"
              classes="flex-1"
              label={"ENS"}
              value={ensName}
            />
          </div>

          <Box height={20} />

          <TextField
            ref={bioRef}
            fieldName="Bio"
            classes="bio-field"
            type="text"
            name="bio"
            placeholder="What describes you the best?"
            validate={(subject) => {
              // if (subject === "") {
              //   return "Bio please!";
              // }
            }}
          />
          <Box height={40} />
          <div className="flex items-center">
            <FilledButton
              classes="landing-btn"
              text={"Create"}
              onclick={() => {
                document.getElementById("formBtn").click();
              }}
            />
            <button
              id="formBtn"
              type="submit"
              style={{ display: "hidden" }}
            ></button>
            <Box width={30} />
            <div className="error-text">{error}</div>
          </div>
          <Box height={50} />
        </form>
      </main>
    </>
  );
}

export default RegisterPage;
