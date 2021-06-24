import { useHistory } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import { Button } from "../components/Button";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Q&amp;A representation" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Answer real time questions from your audience</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="ggask logo" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Google logo" />
            Create a room with Google
          </button>
          <div className="separator">or enter a room</div>
          <form action="">
            <input type="text" placeholder="Enter room code" />
            <Button type="submit">Enter room</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
