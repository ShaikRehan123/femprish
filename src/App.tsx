import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col h-[calc(100vh-5rem)] bg-white hero md:flex-row gap-4">
        <div className="flex flex-col gap-2 w-full md:w-[50%] justify-center items-center">
          <h1 className="text-6xl font-bold text-pink-600">Femprish</h1>
          <p className="text-2xl font-medium text-center text-gray-500">
            Femprish is a non-profit organization dedicated to promoting
            equality and empowering individuals, with a special focus on India.
            We aim to eliminate the negative connotations associated with the
            term "feminist" and create a society where everyone, regardless of
            gender, can thrive and achieve their full potential.
          </p>
        </div>
        <img
          src="/hero-section-photo.jpeg"
          alt="hero"
          className="w-full md:w-[50%] h-full "
        />
      </div>
    </div>
  );
}

export default App;
