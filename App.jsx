
import './App.css'
import Porfile from "./assets/Photo.png"
import PorfileBg from "./assets/small.png"
import project1 from "./assets/project1.png"
import project2 from "./assets/project2.png"
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";


function App() {

  return (
    <>
     <header>
      <div className='container m-auto px-4 py-6'>
        <div className='flex justify-between'>
          <div>
            <h1 className="font-bold text-xl">Bhavani Sajjanapu Portfolio</h1>
          </div>
          <div>
            <ul  className="flex gap-4">
              <li>
                <a href="#projects"className='text-white-500 hover:text-white cursor-pointer'>⚪Projects</a>
              </li>
              <li>
                  <a href="#skills" className="text-white-500 hover:text-white cursor-pointer">
                    ⚪Skills
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-white-500 hover:text-white cursor-pointer">
                    ⚪About me
                  </a>
                </li>
            </ul>
          </div>

        </div>

      </div>
     </header>
     <main>
      {/* Intro/Banner section */}
      <section>
        <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
          <div>
              <h3 className="font-bold text-4xl">Hello, I'm Bhavani Sajjanapu,</h3>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text running-text">Software Developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-300">
                  Responsible and motivated undergraduate student ready to apply education in workplace,
                  Seeking an opportunity to contribute a company as an engineer.
                </p>
                
            </div>
          </div>
    
          <div className="relative">
            <img src={Porfile} width={200} className='relative z-10'/>
            <img src={PorfileBg} width={180} className='absolute top-6 left-12  z-0'/>
          </div>
        </div>
      </section>
      {/* Projects section */}
      <section id="projects">
      <div className="container m-auto px-4 sm:py-12">
        <h2 className="text-2xl font-semibold">PROJECTS</h2>
      <div className="flex flex-col sm:flex-row gap-10 mt-11">
        <div className="border border-gray-500 rounded-md p-5 flex-1">
          <img src={project1}  className="w-full h-auto"/>
          <h3 className="text-2xl font-semibold mt-8">Text to HTML generator</h3>
          <p className="text-gray-300 text-sm mt-2">Responsive Online Html/css layout for text to html convertor using Django and Python</p>
                <div className="flex mt-12 gap-2">
      
            
                  <a href="https://github.com/SajjanapuBhavani/project1
" className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">CHECKOUT GITHUB</a>
                </div>
          </div>
       
      </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1">
          <img src={project2}  className="w-full h-auto"  />
          <h3 className="text-2xl font-semibold mt-8">Derm Detect</h3>
          <p className="text-gray-300 text-sm mt-2">Automated system for the detection and classification of dermatological disorders using a combination of image processing and machine learning techniques.</p>
                <div className="flex mt-12 gap-2">
                 
            
                  <a href="https://github.com/BhavaniSajjanapu/project2/" className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">CHECKOUT GITHUB</a>
                </div>
          </div>
      </div>
      {/*Skills section*/}
      <section className="py-10" id="skills">
      <div className="container m-auto px-4 sm:py-12">
        <h2 className="text-2xl font-semibold">SKILLS</h2>
 
      <div className="mt-14">
          <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-400">Advanced</p>
          </div>
          <div>
          <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          </div>
          <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS</h2>
                  <p className="text-gray-400">Advanced</p>
                </div>
                <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    Java
                  </h2>
                  <p className="text-gray-400">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">MySql</h2>
                  <p className="text-gray-400">Advanced</p>
                </div>
                <span className="w-[65%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Python</h2>
                  <p className="text-gray-400">Advanced</p>
                </div>
                <span className="w-[55%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

      </div>

      </section>
      {/* Additional skills section */}
      <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              ADDITIONAL SKILLS
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Adaptive
                </p>
              </div>
             
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                 Cambridge B2 level
                </p>
              </div>
              
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">ABOUT ME</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p>
                  Completed schooling at St.Joseph's Convent High School(Adilabad) scored 9.8 GPA
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p>
                 Finished Intermediate at Sri Chaitanya Junior College(Hyderabad)
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h5 className="absolute left-0 text-lg font-semibold">2021-2025</h5>
                
                <p>
                     (ongoing) With an interest in Software field,decided to try programming.
                  Choosen Undergraduate Btech degree at Mallareddy University in Artificial Intelligence and Machine Learning. Developed projects,engaged in various programs and currently learning emerging technologies to achive a good position in one of the MNC's
                </p>
              </div>
              
            </div>
          </div>
        </section>
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              CONTACT ME:
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  📞Cell no: 9347336802

                </p>
              </div>
             
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  ✉️Mail: bhavanisajjanapu07@gmail.com
                </p>
              </div>
              <div>
            
          </div>
              
            </div>
            
          </div>
        </section>
        
        
          
      </section>
     </main>
     <footer>
     <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              
              <li>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/bhavani-sajjanapu-2baa67253/">
                  <img src={LinkedIn} className="w-5" />
                </a>

              </li>
              
            </ul>
          </div>
        </div>
     </footer>

    </>
  

  );
}

export default App;
