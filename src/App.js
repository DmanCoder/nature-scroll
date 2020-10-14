import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section id="first-section">
      <nav>
        <div class="nav-wrapper">
          <h4>Ready co.</h4>
          <a class="button" href="#">
            Sign Up
          </a>
        </div>
      </nav>
      <div class="container">
        <div class="title">Nature.</div>
        <div class="images">
          <div class="image-wrapper" id="first">
            <img src={require('./img/6.png')} />
          </div>
          <div class="image-wrapper" id="second">
            <img src={require('./img/5.png')} />
          </div>
          <div class="image-wrapper" id="third">
            <img src={require('./img/4.png')} />
          </div>
          <div class="image-wrapper" id="forth">
            <img src={require('./img/3.png')} />
          </div>
          <div class="image-wrapper" id="fifth">
            <img src={require('./img/2.png')} />
          </div>
          <div class="image-wrapper" id="sixth">
            <img src={require('./img/1.png')} />
          </div>
          <div class="blur"></div>
        </div>
        <footer>
          <div class="footer-wrapper">
            <ul>
              <li>Instagram.</li>
              <li>Facebook.</li>
              <li>Dribble.</li>
              <li>Twitter.</li>
            </ul>
          </div>
        </footer>
        <div class="content">
          <div class="content-wrapper">
            <div class="content-images">
              <div class="content-image-wrapper one">
                <img src="https://images.unsplash.com/photo-1550422086-b9589ec2d371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />
                <h4>W</h4>
              </div>
              <div class="content-image-wrapper two">
                <img src="https://images.unsplash.com/photo-1550433251-d1a8ff40ff05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <h4>E</h4>
              </div>
              <div class="content-image-wrapper three">
                <img src="https://images.unsplash.com/photo-1550364387-ffbad4f8e9b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <h4>S</h4>
              </div>
              <div class="content-image-wrapper four">
                <img src="https://images.unsplash.com/photo-1550183203-8d3ca82400c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <h4>T</h4>
              </div>
            </div>
            <p class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
