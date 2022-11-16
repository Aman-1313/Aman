
import { Grid } from '@mui/material';
import { Link, } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LItem from './LItem';
import './App.css';

function Learning() {
  return (
    <div className="App">
      <div class ="NavBar">
        <Link to='/'className="Name" >Aman P Singh <br/> </Link>
        <Link to='/'className="Link">Homepage</Link>
        <a className='Link' href='https://aman-1313.github.io/'>Resume</a>
        <Link to='/Learning'className="Link">Learning</Link>
        <a className='Link' href='https://github.com/Aman-1313'>GitHub<GitHubIcon /></a>
      </div>
      <div className='Body'>
        <img className="rocket" src="https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png" alt='ROCKET' />
        <p className='Quote'>The only way to rectify our reasonings is to make them as tangible as those of the mathematicians, so that we can find our error at a glance, and when there are disputes among persons we can simply say, “Let us calculate... to see who is right.”—Leibniz, The Art of Discovery</p>
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <LItem name="Machine Learning"  imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" para="Machine learning is a field of inquiry devoted to understanding and building methods that 'learn'" link="https://aman-1313.github.io/Machine-Learning/" />
            </Grid>
            <Grid item xs={6}>
              <LItem name="Applied Machine Learning"  imageUrl="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" para="The concept of applied machine learning is the application of the machine learning domain." link="https://aman-1313.github.io/" />
            </Grid>
            <Grid item xs={6}>
              <LItem name="Data Science"  imageUrl="https://images.unsplash.com/photo-1600469984476-c713650f1b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" para="Data science is an interdisciplinary field that uses scientific methods, processes, algorithms " link="https://aman-1313.github.io/" />
            </Grid>
            <Grid item xs={6}>
              <LItem name="Programming"  imageUrl="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" para="Solutions to some of the algorithmic problems that, I have come across during my degree and interviews " link="https://aman-1313.github.io/" />
            </Grid>
          </Grid>
       
      </div>  
    </div>
  );
}

export default Learning;