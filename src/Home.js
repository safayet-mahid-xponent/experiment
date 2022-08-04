import { Authenticator, useTheme } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import CustomHeader from "./customHeader";

const components = {
  Header() {
    return <CustomHeader />;
  },
};

export default function Home() {
  return (
    <Authenticator components={components}>
      {({ signOut }) => <button onClick={signOut}>Sign out</button>}
    </Authenticator>
  );
}
