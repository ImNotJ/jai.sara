import ccpI from './assets/icons/icon7.png';
import gitI from './assets/icons/icon9.png';
import linkI from './assets/icons/icon3.png';
import sapI from './assets/icons/start icon.png';
import cssaI from './assets/icons/icon13.png';
import cs3 from './assets/icons/icon2.png';
import cs2 from './assets/icons/icon4.png';
import cs1 from './assets/icons/icon8.png';
import fin3 from './assets/icons/icon12.png';
import fin2 from './assets/icons/icon11.png';
import fin1 from './assets/icons/icon6.png';

export const csProjectsItems = [
    {
        icon: cs1,
        text: 'Personal Website',
        url2: 'https://github.com/ImNotJ/jaisara',
        title: 'Windows 98 Styled Personal Website',
        tools: 'React.js, Node.js, HTML, CSS',
        body: 'This personal website is a unique and nostalgic React.js application designed to look and feel like the classic Windows 98 operating system. It features a desktop environment with a taskbar, modals for applications like Notepad and Paint, and is fully responsive for mobile devices. The website also includes a startup sound and other sound effects, adding to the authentic Windows 98 experience. This web application is hosted on www.jaisara.com and deployed using GitHub Pages with a continuous integration and deployment pipeline.'
    },
    { 
        icon: cs2,
        text: 'Web-Scraping Pipeline',
        url2: 'https://github.com/ImNotJ/groceries',
        title: 'Grocery Price Web-Scraping Pipeline',
        tools: 'Streamlit, Pandas, BeautifulSoup, Requests',
        body: 'The Grocery Prices Project is a data-driven application that leverages web scraping, data cleaning, and visualization techniques to track and analyze grocery prices from major retailers like Wegmans, Walmart, and Aldi. By automating the data collection process using Python scripts and scheduling regular updates with GitHub Actions, the project ensures up-to-date information is available. The cleaned and processed data is then presented through an interactive Streamlit app, allowing users to explore price trends and comparisons seamlessly. This project showcases the integration of various computer science concepts, including web scraping, data processing, and web application development. The app is hosted at https://grocery-prices.streamlit.app/ using GitHub Actions with a continuous integration and deployment pipeline on the Streamlit Cloud.'
    },
    { icon: cs3, 
        text: 'Fair Benefits',
        url2: 'https://github.com/ImNotJ/benefitaid',
        title: 'Fair Benefits Web Application',
        tools: 'React.js, Spring Boot, Docker, AWS',
        body: 'The Fair Benefits web application, hosted at fairbenfits.org, helps users discover their eligibility for state and federal benefits through a series of quizzes. Users can create accounts, log in, and answer quizzes to determine their benefit eligibility. Admins can log in from fairbenefits.org/admin-login using the username admin and password 1234 to manage questions, benefits, and quizzes. The application leverages various AWS servicees, including EC2, S3, ALB, ACM, CloudFront, IAM, VPC, Security Groups, RDS SQL, and Route 53, to ensure scalability, security, and high availability. The frontend is built with React.js and hosted on AWS S3, while the backend is built with Java Spring Boot and hosted on an AWS EC2 instance.'}
];

export const financeProjectsItems = [
    { icon: fin1,
        text: 'IB Analyst Portfolio',
        url2: 'https://github.com/ImNotJ/ibportfolio',
        title: 'IB/Finance Analyst Portfolio',
        tools: 'Excel',
        body: 'While I have not yet had the opportunity to learn critical financial skills in a professional setting, I have proactively sought to develop my expertise in areas that bridge both finance and technology. By building a 3-statement financial model for Otis, or a DCF model for Nvidia, I hope to reflect my commitment to understanding key financial principles while utilizing technology to gather and analyze data, demonstrating my drive to learn and apply these skills independently. For more practical examples of my work in combining my interests in finance and technology, please see my Grocery Price Inflation project.'
    },
    { icon: fin2,
        text: 'Grocery Price Inflation',
        url2: 'https://github.com/ImNotJ/groceries',
        title: 'Grocery Price Inflation Dashboard',
        tools: 'Streamlit, Pandas, BeautifulSoup, Requests',
        body: 'The Grocery Prices Project provides valuable insights into the pricing trends of common household groceries, aiding in the analysis of inflation and the Consumer Price Index (CPI). By tracking approximately 100 items across Wegmans, Walmart, and Aldi, the project ensures consistency and standardization in price comparisons. The interactive Streamlit app allows users to explore how prices fluctuate over time, offering a practical tool for understanding market dynamics and inflationary pressures. This project highlights the importance of data accuracy and consistency in financial analysis, providing a robust framework for monitoring and analyzing grocery prices. The app is deployed at https://grocery-prices.streamlit.app/ using GitHub Actions with a continuous integration and deployment pipeline on the Streamlit Cloud.'
    },
    { icon: fin3, text: 'TBD' }
];

export const certificationsItems = [
    { icon: ccpI, text: 'AWS Cloud Practitioner' },
    { icon: sapI, text: 'TBD' },
    { icon: cssaI, text: 'TBD' }
];

export const contactItems = [
    { icon: gitI, text: 'Github', url: 'https://github.com/ImNotJ' },
    { icon: linkI, text: 'LinkedIn', url: 'https://www.linkedin.com/in/jaisaravanan/' }
];
