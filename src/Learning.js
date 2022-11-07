
import { Button } from '@mui/material';
import { Link, } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import './App.css';
function Learning() {
  return (
    <div className="App">
      <div class ="NavBar">
        <Link to='/'className="Name" >Aman P Singh</Link>
        <Link to='/'className="Link">Homepage</Link>
        <a className='Link' href='https://aman-1313.github.io/'>Resume</a>
        <Link to='/Learning'className="Link">Learning</Link>
        <a className='Link' href='https://github.com/Aman-1313'>GitHub<GitHubIcon /></a>
      </div>
      <div className='Body'>
      <img class="rocket launch" src="https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png" alt='ROCKET' />
      <p className='Quote'><b>The only way to rectify our reasonings is to make them as tangible as those of the mathematicians, so that we can find our error at a glance, and when there are disputes among persons we can simply say, “Let us calculate... to see who is right.”—Leibniz, The Art of Discovery</b></p>
        
       
        <ul className='CourseList'>
          <li className='CourseItem'>
            <Button variant="outlined" color='primary'>
              <h3> Machine Learning </h3>
            </Button>
          </li>
          <li className='CourseItem'>
          <Button variant="outlined" color='primary'>
            <h3> Applied Machine Learning </h3>
          </Button>
          </li >
          <li className='CourseItem'>
            <Button variant="outlined" color='primary'>
              <h3> Data Science</h3>
            </Button>
          </li>
        </ul>
        
        
      </div>  
    </div>
  );
}

export default Learning;