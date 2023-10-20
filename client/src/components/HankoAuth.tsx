import { useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

console.log(hankoApi);

export default function HankoAuth() {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const redirectAfterLogin = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi, {
      shadow: true,
      injectStyles: true,
      enablePasskeys: true,
      hidePasskeyButtonOnLogin: false,
      translations: undefined,
      translationsLocation: "/i18n",
      fallbackLanguage: "en",
      storageKey: "hanko",
    }).catch((error) => {
      // handle error
      console.error(error);
    });
  }, []);

  return <hanko-auth />;
}
