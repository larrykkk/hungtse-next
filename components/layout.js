import Header from "../components/TheHeader";
import Footer from "../components/TheFooter";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
}
