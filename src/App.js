import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Header from './components/header/Header';
import Navbar from './components/navbar/NavigationBar';
import Content from './components/content/Content';
import ContentTwo from './components/content-two/ContentTwo';
import ContentThird from './components/content-third/ContentThird';


export default function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Content />
      <ContentTwo />
      <ContentThird />
    </>
  );
}
