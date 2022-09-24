import ProfilePictures from "../../components/profile_pictures/ProfilePictures";
import FilledButton from "../../components/filled_button/FilledButton";
import Box from "../../components/utils/Box";
import InfoField from "../../components/info_field/InfoField";
import { TextField } from "../../components/textfield/TextField";
import "./register_page.css";

function RegisterPage() {
  return (
    <>
      <main className="container">
        <Box height={20} />
        <h1 className="heading">Register</h1>

        <Box height={20} />

        <ProfilePictures />

        <Box height={30} />

        <form autoComplete="off" spellCheck="false">
          <div className="flex">
            <TextField
              //   ref={nameRef}
              classes="flex-1"
              fieldName="Username"
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
              value="0x3EE8d84ad9082DeC4fc9dEadAB3A63B4AfecF87d"
            />
          </div>

          <Box height={20} />

          <div className="flex">
            <TextField
              //   ref={nameRef}
              classes="flex-1"
              fieldName="Name"
              type="text"
              name="name"
              placeholder="What's your name?"
              validate={(name) => {
                if (name === "") {
                  return "Your name please!";
                }
              }}
            />

            <Box width={50} />

            <InfoField
              id="ens"
              classes="flex-1"
              label={"ENS"}
              value="sumit07.eth"
            />
          </div>

          <Box height={20} />

          <TextField
            //   ref={subjectRef}
            fieldName="Bio"
            classes="bio-field"
            type="text"
            name="bio"
            placeholder="What describes you the best?"
            validate={(subject) => {
              if (subject === "") {
                return "Bio please!";
              }
            }}
          />
          <Box height={40} />
          <div className="flex items-center">
            <FilledButton
              classes="landing-btn"
              text={"Create"}
              onclick={() => {}}
            />
            <Box width={30} />
            <div className="error-text">Error here</div>
          </div>
          <Box height={50} />
        </form>
      </main>
    </>
  );
}

export default RegisterPage;
