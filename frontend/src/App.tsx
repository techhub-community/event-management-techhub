import Header from "./Header";
import Nav from "./Nav";
import Body from "./Body"
import Photo from "./Photo";
import Faq from "./Faq";
import Footer from "./Footer";

function App() {
 
  return (
    <>
        <Nav />
        <Header eventname="Event Name" state1="Organized by:" state2="Team ChodeShack" />
        <Body date="21/2/24" time="1:30PM"/>
        <Photo />
        <Faq />
        <Footer eventname="Event name" venuetime="venue and time"/>
    </>
    );
}

export default App