import React from "react";
import { AiFillGithub,AiFillLinkedin,AiFillInstagram,AiFillTwitterCircle } from "react-icons/ai";
import { SiTheregister } from "react-icons/si";
import { BsFillBriefcaseFill ,BsFacebook} from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { Typewriter,useTypewriter } from 'react-simple-typewriter'
import "./style.css";

const Home = () => {
  const {text} = useTypewriter({
    words: ['Frontend Developer', 'Responsive Web Designer', 'Backend Developer', 'Passionate Coder!'],
    loop: Infinity // Infinit
  })

  return (
    <div>
      <main className=" w-full  min-h-[calc(100vh-60px) md:min-h-[calc(100vh-70px)] bg-[#002244]     grid grid-cols-1 md:grid-cols-2 place-items-center font-rancho border-b-[16px] border-b-[#B9D9EB]">
        <section
          className="relative z-[3] bg-transparent w-full min-h-[calc(100vh-60px)] md:min-h-[80vh] px-3 md:px-5 flex flex-col justify-end items-center "
          id="top"
        >
          <h1
            className="text-2xl md:text-4xl md:tracking-widest font-normal  uppercase text-[#fff] pb-2 "
            style={{ textShadow: "4px 10px 5px #ffffff7e" }}
          >
            Andrew
          </h1>
          <h1
            className="text-6xl md:text-8xl md:tracking-widest font-normal  uppercase text-[#F2F2F2] pb-2 "
            style={{ textShadow: "4px 10px 5px #ffffff7e" }}
          >
            Aghoghovwia
          </h1>

          <div className="w-full mt-8 flex justify-center items-center">
            <button className="hidden py-3 uppercase  w-[80%]   md:w-[40%]  rounded-xl font-normal bg-slate-100 text-slate-700 shadow-md shadow-slate-600 text-md md:text-xl md:flex justify-center items-center mb-8">
              <AiOutlineDownload className=" text-xl md:text-2xl mr-2 " />
              Download cv
            </button>
            <span className="md:hidden text-slate-50 font-normal font-rancho text-2xl mb-5 text-left tracking-wider">- {text} -</span>
          </div>
          <img
            src="/images/me.png"
            className="absolute opacity-80 h-[100%] z-[-1]"
          />
          {/* social links */}
          
          <div className="absolute right-0 md:left-0 w-[40px] md:w-[60px] h-[250px] md:h-[300px] top-[20%] md:top-[10%] bg-red-600 grid grid-cols-1 place-items-center rounded-t-lg rounded-b-lg">
              <div className="border-b-2  border-b-slate-300 w-full h-full flex justify-center items-center">
                <AiFillGithub className='text-slate-50 text-2xl md:text-3xl'/>
              </div>
              <div className="border-b-2  border-b-slate-300 h-full w-full flex justify-center items-center">
              <AiFillLinkedin className='text-slate-50 text-2xl md:text-3xl'/>
              </div>
              <div className="border-b-2  border-b-slate-300 h-full w-full flex justify-center items-center">
              <AiFillInstagram  className='text-slate-50 text-2xl md:text-3xl'/>
              </div>
              <div className="border-b-2  border-b-slate-300 h-full w-full flex justify-center items-center">
              <AiFillTwitterCircle className='text-slate-50 text-2xl md:text-3xl'/>
              </div>
              <div className="border-b-2  border-b-slate-300 h-full w-full flex justify-center items-center">
              <BsFacebook className='text-slate-50 text-2xl md:text-3xl'/>
              </div>
          </div>



        </section>
        <section className="w-full h-full  min-h-[50vh] md:min-h-[80vh] md:flex md:flex-col justify-center items-center px-3 hidden relative  ">
          <div className="w-full  md:w-[550px] md:h-[550px] md:bg-[#B9D9EB] py-4 rounded-full flex justify-center items-center relative shadow-2xl shadow-rose-200 one">
            {/* <img
              src="/images/inno.svg"
              alt=""
              className="w-[90%] md:translate-x-[-100px] md:translate-y-[50px]  "
            /> */}
            <p className="pt-3  mt-5 text-slate-700 md:leading-8 text-[24px] md:text-2xl  md:w-[80%] uppercase">
              I am a <span className="font-bold">{text}</span>
            </p>
          </div>
          <div className="w-[50px] h-[100px] bg-[#B9D9EB] absolute bottom-0 "></div>
        </section>
      </main>
      <section
        className="w-full  bg-[#002244]   min-h-[calc(100vh+70px)] px-3 pb-28"
        id="about"
      >
        <h4
          className="text-xl  text-center md:text-3xl md:tracking-widest font-normal uppercase text-[#F2F2F2] pb-2  pt-[80px] md:pt-[90px]"
          style={{ textShadow: "8px 10px 5px #ffffff7e" }}
        >
          About Me
        </h4>
          -2
          <article className="w-full md:w-[80%] mx-auto md:mt-10">
          <div className="w-full md:max-w-[1100px] mx-auto">
          <p className="text-slate-200 w-full ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nobis ratione animi quam quidem assumenda nam, dolorum ullam est officia ut ab culpa tempore debitis repellendus voluptates ex, fugiat voluptatibus!</p>
          </div>
          </article>

          
        <div className="w-full grid grid-cols-1 md:grid-cols-2  place-items-center mt-10 max-w-[1100px] mx-auto">
            <div className="w-full  border-[#B9D9EB] py-2 md:py-3">
                <h5 className="text-xl text-slate-100 uppercase">A little about me</h5>
            </div>
            <div className="w-full  border-[#B9D9EB] py-2 md:py-3">
                <p className="text-md text-slate-100 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit aut porro est ad sapiente accusantium ipsam, numquam ipsum quis esse pariatur ex beatae qui rem. Consectetur commodi rerum sed.</p>
            </div>
            <div className="w-full  border-[#B9D9EB] py-2 md:py-3 flex justify-start items-start min-h-[10vh] md:min-h-[50vh] ">
                <h5 className="text-xl text-slate-100 uppercase pt-4">my timeline</h5>
            </div>
            <div className="w-full  border-[#B9D9EB] py-2 md:py-3 min-h-[50vh] ">
                <div className="w-full border-t-2 border-[#B9D9EB] py-2 md:py-3 font-semibold">
                   <div className="bg-slate-50 w-[30%] px-2">
                     <p className="text-slate-600 font-semibold mb-1">2020-Date</p>
                   </div>
                    <p className="text-slate-50">Designer of the Week</p>
                </div>
                <div className="w-full border-t-2 border-[#B9D9EB] py-2 md:py-3">
                <div className="bg-slate-50 w-[30%] px-2">
                     <p className="text-slate-600 font-semibold mb-1">2020-Date</p>
                   </div>
                    <p className="text-slate-50">Designer of the Week</p>
                </div>
                <div className="w-full border-t-2 border-[#B9D9EB] py-2 md:py-3">
                <div className="bg-slate-50 w-[30%] px-2">
                     <p className="text-slate-600 font-semibold mb-1">2020-Date</p>
                   </div>
                    <p className="text-slate-50">Designer of the Week</p>
                </div>
                <div className="w-full border-t-2 border-[#B9D9EB] py-2 md:py-3">
                <div className="bg-slate-50 w-[30%] px-2">
                     <p className="text-slate-600 font-semibold mb-1">2020-Date</p>
                   </div>
                    <p className="text-slate-50">Designer of the Week</p>
                </div>
                <div className="w-full border-t-2 border-[#B9D9EB] py-2 md:py-3">
                <div className="bg-slate-50 w-[30%] px-2">
                     <p className="text-slate-600 font-semibold mb-1">2020-Date</p>
                   </div>
                    <p className="text-slate-50">Designer of the Week</p>
                </div>
               
            </div>
        </div>


            <div className=" w-full grid grid-cols-1 md:grid-cols-2 place-items-center md:max-w-[1100px] mx-auto mt-16">
                <div className="w-full py-2 md:py-3 md:min-h-[35vh] flex justify-start items-start">
                    <p className="text-xl text-slate-50 uppercase">Skills</p>
                </div>
                <div className="w-full py-2 md:py-3 ">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-50 pl-4">Html</span>
                    <span className="text-slate-50 pr-4">90%</span>
                  </div>
                    <div className="w-full bg-slate-500  h-3">
                      <div className="w-[90%] bg-green-600 h-3"></div>
                    </div>
                    <div className="w-full py-2 md:py-3">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-50 pl-4">Css</span>
                    <span className="text-slate-50 pr-4">85%</span>
                  </div>
                    <div className="w-full bg-slate-500  h-3">
                      <div className="w-[85%] bg-green-600 h-3"></div>
                    </div>
                </div>
                <div className="w-full py-2 md:py-3">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-50 pl-4">Javascript</span>
                    <span className="text-slate-50 pr-4">75%</span>
                  </div>
                    <div className="w-full bg-slate-500  h-3">
                      <div className="w-[75%] bg-green-600 h-3"></div>
                    </div>
                </div>
                <div className="w-full py-2 md:py-3">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-50 pl-4">React</span>
                    <span className="text-slate-50 pr-4">80%</span>
                  </div>
                    <div className="w-full bg-slate-500  h-3">
                      <div className="w-[80%] bg-green-600 h-3"></div>
                    </div>
                </div>
                <div className="w-full py-2 md:py-3">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-50 pl-4">Node</span>
                    <span className="text-slate-50 pr-4">60%</span>
                  </div>
                    <div className="w-full bg-slate-500  h-3">
                      <div className="w-[60%] bg-green-600 h-3"></div>
                    </div>
                </div>
                </div>               
            </div>

      </section>

      <section  className="w-full  bg-[#002244]   min-h-[100vh] md:min-h-[calc(100vh-70px)] pb-20"
        id="portfolio">
           <h4
          className="text-xl text-center md:text-2xl md:tracking-widest font-normal uppercase text-[#F2F2F2]   pt-[80px] md:pt-[90px] "
          style={{ textShadow: "24px 20px 5px #ffffff7e" }}
        >
          Portfolio
        </h4>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 place-items-center px-3 md:max-w-[1100px] mx-auto mt-20">
            <div className="w-full border-2 border-slate-700 min-h-[50vh] relative shadow-md shadow-slate-400">
              <img src="/images/one.jpg" alt="" className="min-h-[50vh] w-full" />
                <div className="absolute w-full bottom-0 left-0 right-0 h-[60px] border-t-2 bg-slate-300 border-slate-500 flex justify-between items-center px-4">               
                    <button className="py-2 px-12 bg-slate-700 text-slate-50">Live</button>
                    <button className="py-2 px-12 bg-[#b9d9ebda] border-2 border-blue-900  text-slate-600">Code</button>
                </div>
            </div>
            <div className="w-full border-2 border-slate-700 min-h-[50vh] relative shadow-md shadow-slate-400">
            <img src="/images/two.jpg" alt="" className="min-h-[50vh] w-full" />                    
            <div className="absolute w-full bottom-0 left-0 right-0 h-[60px] border-t-2 bg-slate-300 border-slate-500 flex justify-between items-center px-4">           
                    <button className="py-2 px-12 bg-slate-700 text-slate-50">Live</button>
                    <button className="py-2 px-12 bg-[#b9d9ebda] border-2 border-blue-900  text-slate-600">Code</button>
              </div>
            </div>
            <div className="w-full border-2 border-slate-700 min-h-[50vh] relative shadow-md shadow-slate-400">
            <img src="/images/four.jpg" alt="" className="min-h-[50vh] w-full" /> 
            <div className="absolute w-full bottom-0 left-0 right-0 h-[60px] border-t-2 bg-slate-300 border-slate-500 flex justify-between items-center px-4">
                    <button className="py-2 px-12 bg-slate-700 text-slate-50">Live</button>
                    <button className="py-2 px-12 bg-[#b9d9ebda] border-2 border-blue-900  text-slate-600">Code</button>
            </div>
            </div>
            <div className="w-full border-2 border-slate-700 min-h-[50vh] relative shadow-md shadow-slate-400">
            <img src="/images/three.jpg" alt="" className="min-h-[50vh] w-full" />
            <div className="absolute w-full bottom-0 left-0 right-0 h-[60px] border-t-2 bg-slate-300 border-slate-500 flex justify-between items-center px-4">           
                    <button className="py-2 px-12 bg-slate-700 text-slate-50">Live</button>
                    <button className="py-2 px-12  bg-[#b9d9ebda] border-2 border-blue-900 text-slate-600">Code</button>
            </div>
            </div>
        </div>        
      </section>

      <section
        className="w-full  bg-[#002244]   min-h-[100vh] md:min-h-[calc(100vh-70px)]"
        id="contact"
      >
        <h4
          className="text-xl text-center md:text-2xl md:tracking-widest font-normal uppercase text-[#F2F2F2] pb-2  pt-[80px] md:pt-[20px]"
          style={{ textShadow: "24px 20px 5px #ffffff7e" }}
        >
          Contact Me
        </h4>


        <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center md:mt-16 mt-10 md:max-w-[1100px] mx-auto">
            <div className="w-full border-2 border-slate-800 min-h-[50vh] flex justify-center items-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.969338173376!2d-0.1763677348049984!3d51.38524157744944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487607cdbe1ec22d%3A0x1409bb10b98d9c86!2sTavern%20Cl%2C%20Carshalton%20SM5%201JE!5e0!3m2!1sen!2suk!4v1654700930237!5m2!1sen!2suk"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full min-h-[50vh]"></iframe>
            </div>
            <div className="w-full border-2 border-slate-800 min-h-[50vh] pt-10 md:pt-0 flex flex-col justify-center items-center pb-[100px] md:pb-0">
              <div className="w-full py-2 flex flex-col md:flex-row items-center px-3 md:px-0 md:pl-5 md:pr-3">
                <label htmlFor="name" className="text-slate-50 w-full md:w-[20%]">Name</label>
                <input type="text" id='name' className="w-full md:w-[80%] bg-slate-50 py-1" />
              </div>
              <div className="w-full py-2 flex flex-col md:flex-row items-center px-3 md:px-0 md:pl-5 md:pr-3">
                <label htmlFor="email" className="text-slate-50 w-full md:w-[20%]">Email</label>
                <input type="text" id='email' className="w-full md:w-[80%] bg-slate-50 py-1" />
              </div>
              <div className="w-full py-2 flex flex-col md:flex-row items-center px-3 md:px-0 md:pl-5 md:pr-3">
                <label htmlFor="message" className="text-slate-50 w-full md:w-[20%]">Message</label>
                <textarea  id='message' rows='5' cols='10' className="w-full md:w-[80%] bg-slate-50 py-1" ></textarea>
              </div>

            <div className="flex justify-center items-center w-full">
            <button className="bg-slate-300 py-3 px-16 text-slate-600 mt-6 ">Send</button>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
