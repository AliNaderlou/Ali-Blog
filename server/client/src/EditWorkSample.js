import React from 'react';
class EditWorkSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      workSample: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    fetch(`/api/data/get-worksample/${params.id}`)
      .then((res) => res.json())
      .then((workSample) => {
        this.setState({
          workSample,
          isLoading: false,
        });
      });
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState((prevState) => {
      let workSample = Object.assign({}, prevState.workSample); // creating copy of state variable jasper
      workSample[name] = value; // update the name property, assign a new value
      return { workSample }; // return new object jasper object
    });
    console.log(this.state.workSample);
  };
  render() {
    return (
      <section className="edit-worksample-container">
        {this.state.isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <form onSubmit="">
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
              {this.state.workSample.medias.map((item,index)=><input value={this.state.workSample.medias[index].src} ></input>)}
            </div>
          </form>
        )}
      </section>
    );
  }
}
export default EditWorkSample;
