import { Component } from 'react';

import { getPictures } from 'Service/serviceApi';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    showButton: false,
    query: '',
    page: 1,
    images: [],
    largeImageURL: '',
  };
  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      getPictures(query, page).then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          showButton: page < Math.ceil(data.totalHits / 12),
        }));
      });
    }
  }
  onSubmit = query => {
    this.setState({ query, page: 1 });
  };
  openModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  onChangePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    return (
      <div>
        {this.state.largeImageURL && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            onClose={this.openModal}
          />
        )}
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {this.state.showButton && <Button onChangePage={this.onChangePage} />}
      </div>
    );
  }
}
