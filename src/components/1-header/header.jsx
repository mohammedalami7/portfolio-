
import  { useState, useEffect } from 'react';
import './header.css';

export default function Header() {
  // State for modal and theme
  const [modal, setModal] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState('dark');

  // Effect to handle theme changes
  useEffect(() => {
    if (modal) {
      setTheme('dark');
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      setTheme('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [modal]);

  // Function to toggle modal
  function toggle() {
    setModal(prevModal => !prevModal);
  }

  // State for menu
  const [menu, setMenu] = useState(false);

  // Function to open menu
  function open() {
    setMenu(prevMenu => !prevMenu);
  }

  // Function to close menu
  function close() {
    setMenu(false);
  }

  return (
    <header>
      <button className='showmodal' onClick={open}><span className='icon-menu'></span></button>
      <div />
      <nav>
        <ul>
          <li><a href="#about">about</a></li>
          <li><a href="#articles">articles</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
      <button>
        <span onClick={toggle} className={modal ? 'icon-moon-o' : 'icon-sun'}></span>
      </button>
      {menu &&
        <div className='menu'>
          <ul>
            <li style={{ textAlign: 'right' }}><button onClick={close} className='icon-close'></button></li>
            <li><a href="">about</a></li>
            <li><a href="">articles</a></li>
            <li><a href="">projects</a></li>
            <li><a href="">contact</a></li>
          </ul>
        </div>
      }
    </header>
  );
}