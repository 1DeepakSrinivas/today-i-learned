import "./style.css";

function App() {
  const appTitle='Today I Learned'

  return (
    <>
      {/* Header */}
      <header className="header">
        <div class="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>{appTitle}</h1>
        </div>

        <button className="btn btn-large btn-open">Share a fact</button>
      </header>

      <NewFactForm />

      <main class="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form"> fact form</form>;
}

function CategoryFilter() {
  return <aside>Category filter</aside>;
}

function FactList() {
  return <section>Facts list</section>;
}
export default App;
