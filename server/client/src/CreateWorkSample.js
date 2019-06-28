import React from 'react';
import './styles/edit-worksample.scss';
class EditWorkSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      workSample: {
        title: '',
        description: '',
        medias: [],
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewMedia = this.addNewMedia.bind(this);
    this.removeMedia = this.removeMedia.bind(this);
  }
  componentDidMount() {}
  handleInputChange = (event, index) => {
    const { value, name } = event.target;
    if (!(name === 'media')) {
      this.setState((prevState) => {
        let workSample = Object.assign({}, prevState.workSample); // creating copy of state variable jasper
        workSample[name] = value; // update the name property, assign a new value
        return { workSample }; // return new object jasper object
      });
    } else {
      this.setState((prevState) => {
        let workSample = Object.assign({}, prevState.workSample); // creating copy of state variable jasper
        workSample.medias[index].src = value; // update the name property, assign a new value
        return { workSample }; // return new object jasper object
      });
    }
  };
  addNewMedia = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      let workSample = Object.assign({}, prevState.workSample); // creating copy of state variable jasper
      workSample.medias.push({ src: '' });
      return { workSample }; // return new object jasper object
    });
  };
  removeMedia = (e, index) => {
    e.preventDefault();
    this.setState((prevState) => {
      let workSample = Object.assign({}, prevState.workSample); // creating copy of state variable jasper
      workSample.medias.splice(index, 1);
      return { workSample }; // return new object jasper object
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/data/create-worksample`, {
      method: 'POST',
      body: JSON.stringify(this.state.workSample),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          alert('Added');
        } else {
          throw res.json();
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  render() {
    return (
      <section className="edit-worksample-container">
        <form onSubmit={this.onSubmit}>
          <input
            name="title"
            value={this.state.workSample.title}
            onChange={this.handleInputChange}
          />
          <textarea
            rows="10"
            cols="40"
            name="description"
            onChange={this.handleInputChange}
            value={this.state.workSample.description}
          />
          <h4>Medias:</h4>
          <div className="medias-container">
            {this.state.workSample.medias.map((item, itemIndex) => {
              const index = itemIndex;
              return (
                <div className="media" key={index}>
                  <input
                    value={item.src}
                    name="media"
                    onChange={(e, indexItem = index) =>
                      this.handleInputChange(e, indexItem)
                    }
                  />
                  <button
                    className="delete-worksample-button"
                    onClick={(e, indexItem = index) =>
                      this.removeMedia(e, indexItem)
                    }
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <button className="new-media-button" onClick={this.addNewMedia}>
            +
          </button>
          <input type="submit" value="Save" />
        </form>
      </section>
    );
  }
}
export default EditWorkSample;
