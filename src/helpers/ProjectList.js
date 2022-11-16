import proj1 from '../images/dashboard.png';
import proj2 from '../images/booking-photo.png';
import proj3 from '../images/memories.png';
import proj4 from '../images/youtube.png';
import proj5 from '../images/webscrapping.png';
import proj6 from '../images/url.png';

export const ProjectList = [
  {
    title: 'Inventory Billing App',
    description:
      'In this project I have made inventory management with billing application.Anyone can use to create invoices and download and send invoices to mail to their customers.This project contains latest authentication and authorization.',
    image: proj1,
    tags: ['Mongo', 'Express', 'React', 'Redux', 'Node'],
    sourceFront:
      'https://github.com/Kavyakavi09/inventory_billing_app_frontend',
    sourceBack: 'https://github.com/Kavyakavi09/inventory_billing_app_backend',
    visit: 'https://invoicybilly.netlify.app/',
    id: 0,
  },

  {
    title: 'Guest Room Booking App',
    description:
      'In this project, Owner can create homes and rooms. Guest can book the house. This project contains authorization and authentication.',
    image: proj2,
    tags: ['React', 'MongoDB', 'Express', 'Node'],
    sourceFront: 'https://github.com/Kavyakavi09/guest-booking-app-frontend',
    sourceBack: 'https://github.com/Kavyakavi09/guest-booking-app-backend',
    visit: 'https://guest-booking.netlify.app/',
    id: 1,
  },
  {
    title: 'MERN Memories',
    description:
      'This project contains latest authentication and authorization with pagination and search filter. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.',
    image: proj3,
    tags: ['Mongo', 'Express', 'React', 'Redux', 'Node'],
    sourceFront:
      'https://github.com/Kavyakavi09/social-madia-app-project-frontend',
    sourceBack:
      'https://github.com/Kavyakavi09/social-madia-app-project-backend',
    visit: 'https://social-media-memories-app.netlify.app/',
    id: 2,
  },
  {
    title: 'KavyaTube',
    description:
      'This is the video sharing application like youtube with authentication and authorization. MERN Video sharing application like youtube by using MONGODB, Nodejs and ReactJS.',
    image: proj4,
    tags: ['React', 'Node', 'Firebase', 'MongoDB', 'Express'],
    sourceFront: 'https://github.com/Kavyakavi09/youtube-clone-frontend',
    sourceBack: 'https://github.com/Kavyakavi09/youtube-clone-backend',
    visit: 'https://kavyatube.netlify.app/',
    id: 3,
  },

  {
    title: 'WebScrapping App',
    description:
      'This is a webscrapping application by using cheerio to scrap the datas in amazon, flipkart, snapdeal. This is a small scrapping application',
    image: proj5,
    tags: ['React', ' mongoDB', 'Node', 'Express', 'Cheerio'],
    sourceFront:
      'https://github.com/Kavyakavi09/Webscrapping-Ecommerce-Frontend',
    sourceBack: 'https://github.com/Kavyakavi09/Webscraping-Ecommerce-Backend',
    visit: 'https://webscraping-e-commerce-application.netlify.app/',
    id: 4,
  },
  {
    title: 'URL Shortener App',
    description:
      'This is a url shortener application that allows users to short their urls. This project is made with states, authentication and authorization, forgot password mail system and so on...',
    image: proj6,
    tags: ['React', 'MongoDB', 'Express', 'Node'],
    sourceFront: 'https://github.com/Kavyakavi09/Url-shortener-React-frontend',
    sourceBack: 'https://github.com/Kavyakavi09/UrlShortener-Backend',
    visit: 'https://shortly-url-shortener-app.netlify.app/',
    id: 5,
  },
];
