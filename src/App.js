import Typical from 'react-typical'
import './App.css';
import Header from './components/header/header';
// import {AiFillInstagram , AiOutlineBehance} from 'react-icons/ai'
// import {FaTelegramPlane} from 'react-icons/fa'
import {MdOutlineDevices, MdNaturePeople,MdOutlineSportsKabaddi} from 'react-icons/md'
import {FaGuitar} from 'react-icons/fa'



function App() {
  return (
    <div className="App">
<Header/>

<div className='me'>
<img className='photo' src='https://i.ibb.co/VT0KztH/photo-2022-04-11-17-06-03.jpg' alt='My photo'/>
      <h2>
I am

<Typical
        steps={['Myrza', 2000, 'FRONTEND developer', 2000, 'UX/UI designer', 2000]}
        loop={Infinity}
        wrapper="p"
      />

      </h2>
<p className='info'>
Creative web developer and UX/UI designer. I speak Java-Script, React, Next,Js/ Figma, Adobe PS
</p>

<img className='arrow' src='https://i.ibb.co/wrKYFf4/arrow.png'  alt='arrow'/>

</div>
<div className='about'>
<img className='myphoto' src='https://i.ibb.co/SyVGjV8/photo-2022-04-12-02-06-44.jpg'  alt='myphoto'/>
<div className='bio'>
<h1>
  Myrza Zhyrgalbek uulu
</h1>
<ul>
<h4>
Passionate 
<h4 className='fr'>
    Frontend developer & Ux/Ui designer
  </h4>
</h4>
  
</ul>
<p>
  Hi, my name is Myrza. Website developer and designer. 
  Skilled in React, Next.Js, Material Ui and  Bootstrap.  
  Studied at the programming academy "OGOGO".
</p>

<div className='mail'>
<li>Email: <a href='mailto:myrza080803@gmail.com'> myrza080803@gmail.com</a> </li>
<li>Instagram:  <a href='https://www.instagram.com/myrza.888/?hl=ru'> @myrza.888</a> </li>
<li> Behance: <a href='https://www.behance.net/myrzajyrgalb'> Myrza Zhyrgalbekov</a></li>
<li>Location: <a> Bishkek, Kyrgyzstan</a></li>
</div>


</div>

</div>
  <h2 className='myHobbies'><Typical
        steps={['My hobbies', 2000]}
        loop={Infinity}
        wrapper="p"
      /></h2>
<div className='hobbies'>
<button className='btn'><  MdOutlineDevices className='icn'   /> | Developing</button>
<button className='btn'> <  MdNaturePeople className='icn'  /> | Hiking</button>
<button className='btn'><  FaGuitar className='icn'  /> | Playing guitar</button>
<button className='btn'> <MdOutlineSportsKabaddi className='icn'  /> | Sport</button>

</div>
    </div>
  );
}

export default App;
