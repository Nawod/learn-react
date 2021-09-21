import React from 'react';
import './App.css';
import BlogCard from './blogCards';

class App extends React.Component{
  state = {
    showBlogs: true,
    nObj : [
      {
        title: 'blog 1',
        description: 'Testing react app Testing react app Testing react app',
        likeCount : 0,
      },
      {
        title: 'blog 2',
        description: 'Testing react app Testing react app Testing react app',
        likeCount : 0,
      },
      {
        title: 'blog 3',
        description: 'Testing react app Testing react app Testing react app',
        likeCount : 0,
      }
    ]
  }



//like counts
  likeClick = (position) =>{
    const updatedBlogList = this.state.nObj;
    const updatedBlogObj = updatedBlogList[position];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount +1;
    updatedBlogList[position] = updatedBlogObj;

    this.setState({nObj: updatedBlogList});

  }
 

//button onclick function
  onHideButton = () => {
    
    this.setState((prevState, prevPrps) => {
      return {showBlogs: !prevState.showBlogs}
    });
    
  }

//mentioned render components
  render() {
    //display blog cards
    const blogCards = this.state.nObj.map((item,pos)=>{
      return(
        <BlogCard key={pos} 
          title={item.title} 
          description={item.description}
          likeCount={item.likeCount}
          likeClick={() => this.likeClick(pos)}
        />
      )
    })
    return ( 
      <div className="App">
        <div>
          <button className="btn" onClick={this.onHideButton}>
            {this.state.showBlogs ? 'Hide List' : 'Show List'}
          </button>
        </div>
        {this.state.showBlogs ? blogCards : null}
      </div>
    );
  }
}

export default App;
