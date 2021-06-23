import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Q&amp;A representation" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Answer real time questions from your audience</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="ggask logo" />
          <button>
            <img src={googleIconImg} alt="Google logo" />
            Create a room with Google
          </button>
          <div>or enter a room</div>
          <form action="">
            <input type="text" placeholder="Enter room code" />
            <button type="submit">Enter room</button>
          </form>
        </div>
      </main>
    </div>
  );
}
