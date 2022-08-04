import "@aws-amplify/ui-react/styles.css";
import "../styles/globals.css";
import { Amplify, Auth } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";

let identityPoolId = "us-east-1:fafefc37-e76a-4198-9e01-3ee9efb86577";
let userPoolId = "us-east-1_uxxUNnywX";
let appClientId = "5tbg2bseoj05ntf1khi8ctcjbr";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: "us-east-1",
    userPoolId: userPoolId,
    userPoolWebClientId: appClientId,
    identityPoolId: identityPoolId,
    signupAttributes: "EMAIL",
    secure: true,
  },

  API: {
    endpoints: [
      {
        name: "upranklytoolsApi-dev",
        endpoint: "https://4avsa4f891.execute-api.us-east-1.amazonaws.com",
        region: "us-east-1",
        custom_header: async () => {
          return {
            Authorization: `Bearer ${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`,
          };
        },
      },
    ],
  },
  ssr: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <Authenticator.Provider>
      <Component {...pageProps} />;
    </Authenticator.Provider>
  );
}

// function MyApp({ Component, pageProps }) {
//   return (
//     <Authenticator
//       style={{
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       {({ signOut, user }) => <Component {...pageProps} />}
//     </Authenticator>
//   );
// }
export default MyApp;
