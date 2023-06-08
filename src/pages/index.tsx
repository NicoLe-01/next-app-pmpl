import History from "../components/History";
import NavBar from "../components/NavBar";
import ImageClassifier from "../components/ImageClassifier";
import Footer from "../components/footer";
import Types from "@/components/Types";

export default function Home() {
  return (
    <div>
      <NavBar />
      <ImageClassifier />
      <History />
      <Types />
      <Footer />
    </div>
  );
}
