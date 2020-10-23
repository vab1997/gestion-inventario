import AppLayout from "components/AppLayout";

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps}></Component>
    </AppLayout>
  );
}
