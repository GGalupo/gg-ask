import { Link } from "react-router-dom";

// import { useAuth } from "../hooks/useAuth";

import { Button } from "../components/Button";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import "../styles/auth.scss";

export function NewRoom() {
  // const { user } = useAuth();

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
          <h2>Create a new room</h2>
          <form action="">
            <input type="text" placeholder="Room name" />
            <Button type="submit">Create room</Button>
          </form>
          <p>
            Want to join an existing room? <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
