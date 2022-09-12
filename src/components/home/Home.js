import Footer from "./Footer";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import SectionAbout from "./SectionAbout";
import SectionBelajar from "./SectionBelajar";
import SectionContent from "./SectionContent";
import SectionFooter from "./SectionFooter";
import SectionKelas from "./SectionKelas";
import SectionTwo from "./SectionKelasTwo";
import SectionTestimoni from "./SectionTestimoni";

export default function Home(){
    return(
        <>
            <NavigationBar />
            <Header />
            <SectionContent />
            <SectionAbout />
            <SectionKelas />
            <SectionBelajar />
            <SectionTwo />
            <SectionTestimoni />
            <SectionFooter />
            <Footer />
        </>
    );
}