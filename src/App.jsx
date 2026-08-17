import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";

function App() {

  return(
    <>
      <Header></Header>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Button></Button>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Student name="Spongebob" age="30" isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student/>
      <Footer></Footer>
    </>
  ); 
}

export default App
