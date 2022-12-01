import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Signinsidebar from "./Signinsidebar/Signinsidebar"; 
import './sidebar.scss';

export default function () {
  return (
    <Signinsidebar></Signinsidebar>
  );
}

const sidebarNavItems = [
  {
      display: 'Trending',
      icon: <i className='bx bx-home'></i>,
      to: '/',
      section: ''
  },
  {
      display: 'Best Sellers',
      icon: <i className='bx bx-star'></i>,
      to: '/',
      section: ''
  },
  {
      display: 'New Releases',
      icon: <i className='bx bx-calendar'></i>,
      to: '/',
      section: ''
  },
  {
      display: 'Movers and Shakers',
      icon: <i className='bx bx-user'></i>,
      to: '/',
      section: ''
  },
  {
      display: 'Digital Content And Devices',
      icon: <i className='bx bx-receipt'></i>,
      to: '/',
      section: ''
  },
  {
    display: 'Amazon miniTV-FREE entertainment',
    icon: <i className='bx bx-home'></i>,
    to: '/',
    section: ''
},
{
    display: 'Echo & Alexa',
    icon: <i className='bx bx-star'></i>,
    to: '/',
    section: ''
},
{
    display: 'Fire TV',
    icon: <i className='bx bx-calendar'></i>,
    to: '/',
    section: ''
},
{
    display: 'Kindle E-readers & eBbooks',
    icon: <i className='bx bx-user'></i>,
    to: '/',
    section: ''
},
{
    display: 'Audible Audiobooks',
    icon: <i className='bx bx-receipt'></i>,
    to: '/',
    section: ''
},
{
  display: 'Amazon Prime Video',
  icon: <i className='bx bx-home'></i>,
  to: '/',
  section: ''
},
{
  display: 'Amazon Prime Music',
  icon: <i className='bx bx-star'></i>,
  to: '/',
  section: ''
},
{
  display: 'Shop By Category',
  icon: <i className='bx bx-calendar'></i>,
  to: '/',
  section: ''
},
{
  display: 'Moblies, Computers',
  icon: <i className='bx bx-user'></i>,
  to: '/',
  section: ''
},
{
  display: 'TV,Appliances,Electronics',
  icon: <i className='bx bx-receipt'></i>,
  to: '/',
  section: ''
},
{
  display: ' Men Fashion',
  icon: <i className='bx bx-user'></i>,
  to: '/',
  section: ''
},
{
  display: 'Women Fashion',
  icon: <i className='bx bx-receipt'></i>,
  to: '/',
  section: ''
},
{
display: 'See All',
icon: <i className='bx bx-home'></i>,
to: '/',
section: ''
},
{
display: 'Programs & Features',
icon: <i className='bx bx-star'></i>,
to: '/',
section: ''
},
{
display: 'Gift Cards & Mobile Recharges',
icon: <i className='bx bx-calendar'></i>,
to: '/',
section: ''
},
{
display: 'Flight Tickets',
icon: <i className='bx bx-user'></i>,
to: '/',
section: ''
},
{
display: '#FoundItOnAmazon',
icon: <i className='bx bx-receipt'></i>,
to: '/',
section: ''
}
{
  display: 'Clearence store',
  icon: <i className='bx bx-user'></i>,
  to: '/',
  section: ''
},
{
  display: 'Help & Settings',
  icon: <i className='bx bx-receipt'></i>,
  to: '/',
  section: ''
},
{
  display: 'Your Account',
  icon: <i className='bx bx-user'></i>,
  to: '/',
  section: ''
},
{
  display: 'Customer Service',
  icon: <i className='bx bx-receipt'></i>,
  to: '/',
  section: ''
},
{
display: 'Sign in',
icon: <i className='bx bx-home'></i>,
to: '/',
section: ''
},

]

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
      setTimeout(() => {
          const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
          indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
          setStepHeight(sidebarItem.clientHeight);
      }, 50);
  }, []);

  // change active index
  useEffect(() => {
      const curPath = window.location.pathname.split('/')[1];
      const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
      setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return <div className='sidebar'>
      <div className="sidebar__logo">
          Animate
      </div>
      <div ref={sidebarRef} className="sidebar__menu">
          <div
              ref={indicatorRef}
              className="sidebar__menu__indicator"
              style={{
                  transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
              }}
          ></div>
          {
              sidebarNavItems.map((item, index) => (
                  <Link to={item.to} key={index}>
                      <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                          <div className="sidebar__menu__item__icon">
                              {item.icon}
                          </div>
                          <div className="sidebar__menu__item__text">
                              {item.display}
                          </div>
                      </div>
                  </Link>
              ))
          }
      </div>
  </div>;
};
