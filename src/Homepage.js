import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import CardActions from '@mui/material/CardActions';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';


function Homepage() {
    return (
      <div className="App">
        <div className ="NavBar">
        <Link to='/'className="Name" >Aman P Singh<br/></Link>
        <Link to='/'className="Link">Homepage</Link>
        <a className='Link' href='https://aman-1313.github.io/'>Resume</a>
        <Link to='/Learning'className="Link">Learning</Link>
        <a className='Link' href='https://github.com/Aman-1313'>GitHub<GitHubIcon /></a>
        </div> 
        <div className='Body'>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to my blog!</h2>
            <p> I am a student at <a href="https://umanitoba.ca">University of Manitoba</a>, soon to graduate with a Computer Science, bachelors degree.
            The focus of my study is Data science, with Mathematics minor which includes topics like Linear, Regression Analysis, PCA, Dimension reduction, SVM's etc. Together these topics layout the fundamentals of modern Artificial Intelligence.</p>
            <p> I have a keen interest in the world of Big Data, which often comes with the <a href="https://en.wikipedia.org/wiki/Curse_of_dimensionality">Curse of dimensionality.</a> Apart from data Science, I love software development.
                I am naturally curious, and I love exploring new tools and technologies.
            </p>
            <p>When I am free, I write about the new concepts that I learn in the Tech-world on this blog. Please feel free to jump to the Learning page to to get a feel of what I have learned so far.
                If you find it interesting, you can also use that as a study resource.     
            </p> 
            <CardActions>
                <a className='Link' href='https://linktr.ee/singhap2'><Button size="small" endIcon={<PhoneIcon />}>Contact</Button></a>
                <a className='Link' href='https://github.com/Aman-1313'><Button size="small" endIcon={<GitHubIcon />}>GitHub </Button></a>
            </CardActions>
        </div>
    </div>
    );
  }
  export default Homepage;
