import Footer from "./ui/Footer";
import HomeBanner from "./ui/HomeBanner";
import HomeBanner2 from "./ui/HomeBanner2";
import JoinRequest from "./ui/JoinRequest";
import Services from "./pages/Services";
import MobileMenu from "./ui/MobileMenu";

function AppLayout() {
  return (
    <>
      <MobileMenu />
      <main>
        <HomeBanner />
        <HomeBanner2 />
        <Services />
        <JoinRequest />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
