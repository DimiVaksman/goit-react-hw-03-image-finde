// import 'node_modules/modern-normalize/modern-normalize.css';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Seachbar } from './Searchbar/Searchbar';



export class App extends Component {
  state = {
    pictures: [],
    page: 1,

  }
handleFormSubmit = pictures => {
this.setState({pictures})
console.log(pictures)
}


render(){
  return (
    <div>
 <Seachbar onSubmit={this.handleFormSubmit} />
<ImageGallery value={this.state.pictures}/> 

    </div>
  );
}
};
