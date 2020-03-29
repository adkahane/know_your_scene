import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="text-center my-4">Look Up A Band</h1>
          <form className="form-inline justify-content-center">
            <input className="form-control" type="search" placeholder="Band Name" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={"1997"}
              position = {"right"}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<logo />}
            >
              <h3 className="vertical-timeline-element-title">Band Name</h3>
              <h4 className="vertical-timeline-element-subtitle">1997-2004</h4>
              <p>
                This is a Description of the Band
              </p>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Song</th>
                    <th scope="col">Album</th>
                    <th scope="col">Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="songName">Song 1</td>
                    <td className="albumName">Album 1</td>
                    <td className="releaseYear">2001</td>
                  </tr>
                </tbody>
              </table>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </header>
    </div>
  );
}

export default App;
