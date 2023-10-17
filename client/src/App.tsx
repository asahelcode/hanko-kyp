import HankoAuth from "./components/HankoAuth";

function App() {

  console.log(window.location.href)
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <HankoAuth />
      </div>
    </>
  );
}

export default App;
