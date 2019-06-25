import React from 'react';
import { Link } from 'react-router-dom';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workSamples: [],
      isLoading: true,
    };
    this.loadWorkSamples = this.loadWorkSamples.bind(this);
  }
  componentDidMount() {
    this.loadWorkSamples();
  }
  loadWorkSamples = () => {
    fetch(`/api/data/get-worksamples/All`)
      .then((response) => {
        return response.json();
      })
      .then((workSamples) => {
        const loadedWorkSamples = workSamples;
        this.setState({
          workSamples: loadedWorkSamples,
          isLoading: false,
        });
      });
  };
  render() {
    return (
      <section className="adminPanelContainer">
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <ul>
            {this.state.workSamples.map((workSample, index) => {
              return (
                <Link to={`/edit/worksample/${workSample._id}`}>
                  <li>{`${index} ${workSample.title}`}</li>
                </Link>
              );
            })}
          </ul>
        )}
        <Link to='/create/worksample/'>
          <div className="scroll-to-up-container">
            <i className="icon fas fa-plus" />
          </div>
        </Link>
      </section>
    );
  }
}
export default Admin;
