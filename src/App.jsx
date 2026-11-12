import Navbar from "./assets/Navbar";
import Course from "./assets/Course";
import html from "./assets/html.webp";
import java from "./assets/java.webp";
import Python from "./assets/python.webp";
import C from "./assets/c.webp";
import MySQL from "./assets/mysql.webp"
import DSA from "./assets/dsa with c.webp";
import Dsa from "./assets/dsa with java.webp";
import MongoDB from "./assets/mongo.webp";
export default function App(){
  return(
    <div>
      <Navbar></Navbar>

      <div className="container">
        {/* show(true):to display the image and show(false):it hide image it not visible on webpage */}
        <Course image={html} name="HTML" description="Learn HTML from scratch" price={99} show={true}></Course>
        <Course image={java} name="Java" description="Learn java from scratch" price={399} show={true}></Course>
        <Course image={Python} name="Python" description="Learn python from scratch" price={199} show={true}></Course>
        <Course image={MySQL} name="MySQL" description="Learn mysql full course" price={101} show={true}></Course>
        <Course image={C} name="C Programming" description="Learn C programming from scratch" price={99} show={true}></Course>
        <Course image={DSA} name="DSA using C" description="Learn Data Structure using C" price={399} show={true}></Course>
        <Course image={Dsa} name="DSA using java" description="Learn DSA using java" price={999} show={true}></Course>
        <Course image={MongoDB} name="MongoDB" description="Learn MongoDB from scratch" price={33} show={true}></Course>



      </div>

    </div>
  )
}