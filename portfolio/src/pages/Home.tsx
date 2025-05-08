import { BsInstagram, BsGithub, BsLinkedin  } from "react-icons/bs";
import { GoMail } from "react-icons/go";

export default function Home() {
  return (
    <div className='body'>
        <div className="floating-menu">
          
        </div>
        <div className='presentation'>
            <img className='profile'/>
            <div className='title'>
                <p>
                  Sou o Jonas ✌️ <br/>
                  Desenvolvedor fullstack
                </p>
                <p className="subtitle">
                  Formado no curso superior de análise e desenvolvimento de sistemas pelo IFPB, atualmente estou freelancer, acompanhe meus <a>conhecimentos</a> e <a>experiências</a> mais abaixo
                </p> 
            </div>
            <div className="socials">
              <a href="https://github.com/Jonas-Gomes" target="_blank">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/josé-jonas-gomes-b755441b9/" target="_blank">
                <BsLinkedin />
              </a>
              <a href="https://www.instagram.com/jonas_gcavalcante/" target="_blank">
                <BsInstagram/>
              </a>
              <a href="mailto:jonaszd99@gmail.com">
                <GoMail />
              </a>
            </div>
        </div>
    </div>
  );
}
