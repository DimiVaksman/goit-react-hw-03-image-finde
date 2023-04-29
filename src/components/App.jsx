// import 'node_modules/modern-normalize/modern-normalize.css';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Seachbar } from './Searchbar/Searchbar';
import {getPictures} from './services/API'



export class App extends Component {
  state = {
    pictures: [],

  }
handleFormSubmit = pictures => {
this.setState({pictures})
console.log(pictures)
}

// async getPictures(values){
// const pictures = await api.getPictures(values);
// console.log(pictures)
// }

render(){
  return (
    <div>
 <Seachbar onSubmit={this.handleFormSubmit} />
<ImageGallery value={this.state.pictures}/> 

    </div>
  );
}
};
