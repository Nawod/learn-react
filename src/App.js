import './App.css';
import BlogCard from './blogCards';

function App() {

  const nObj = [
    {
      title: 'blog 1',
      description: 'Testing react app Testing react app Testing react app'
    },
    {
      title: 'blog 2',
      description: 'Testing react app Testing react app Testing react app'
    },
    {
      title: 'blog 3',
      description: 'Testing react app Testing react app Testing react app'
    }
  ]
  
  const blogCards = nObj.map((item,pos)=>{
    return(
      <BlogCard key={pos} 
        title={item.title} 
        description={item.description}/>
      // <div className="card" key={pos}>
      //   <h3>Title: {item.title}</h3>
      //   <p>Description: {item.description}</p>
      // </div>
    )
  })
  return ( 
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
