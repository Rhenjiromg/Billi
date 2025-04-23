import { I18nextProvider } from "react-i18next";
import i18n from "@translations/I18next";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <I18nextProvider i18n={i18n}></I18nextProvider>
    </NavigationContainer>
  );
}
