import Header from "./Header";
import NavigationBar from "./NavigationBar";
import SectionAbout from "./SectionAbout";
import SectionBelajar from "./SectionBelajar";
import SectionContent from "./SectionContent";
import SectionKelas from "./SectionKelas";

export default function Home(){
    return(
        <>
            <NavigationBar />
            <Header />
            <SectionContent />
            <SectionAbout />
            <SectionKelas />
            <SectionBelajar />
        </>
    );
}