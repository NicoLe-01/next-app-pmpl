import History from "../components/History";
import NavBar from "../components/NavBar";
import ImageClassifier from "../components/ImageClassifier";
import Types from "@/components/Types";

export default function Home() {
  return (
    <div>
      <NavBar />
      <ImageClassifier />
      <History />
      <Types />
    </div>
  );
}
