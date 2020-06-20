import React, { useContext } from 'react';
import { Video } from 'cloudinary-react';

import './End.scss';

import { FormContext } from '../contexts/FormContext';
import ShowGraph from '../components/ShowGraph';
import VideoModal from '../components/VideoModal';

/* import steps */

const End = () => {
  const { user } = useContext(FormContext);

  console.log('user: ', user);

  /* const Content = () => {
    return (
      <div className="fullscreen-bg">
        <p>the end</p>
        {JSON.stringify(user)}
      </div>
    );
  };

  const Background = () => {
    return (
      <div className="fullscreen-bg">
        <Video
          cloudName="jepras"
          publicId="cropped-sphere"
          className="fullscreen-bg__video"
        
          poster="false"
          autoPlay
  
          muted
          loop
        />
      </div>
    );
  };

  */

  const Audio = () => {
    return (
      <Video
        cloudName="jepras"
        publicId="videoplayback"
        className="fullscreen-bg__video"
        poster="false"
        autoPlay
        style={{ display: 'none' }}
      />
    );
  };

  return (
    <>
      <Audio />
      <div className="row">
        <div className="column">
          <ShowGraph />
        </div>
        <div className="column" style={{ marginTop: '15%' }}>
          <p>
            This was just a sneak peak of what the final visual report
            summarizing your and many other human beings’ missions. <br />
            <br />
            Click around on their names to see connections.
            <br />
            <br />
            Please share your email if you would like to receive the final
            visual report
          </p>

          <link
            href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
            rel="stylesheet"
            type="text/css"
          />
          <style type="text/css"></style>
          <div id="mc_embed_signup">
            <form
              action="https://jepras.us14.list-manage.com/subscribe/post?u=671c8542725c29d88f8ea0ec8&amp;id=994c3f54b6"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate left-align"
              target="_blank"
              rel="noopener noreferrer"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <input
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                ></input>

                {/*  hidden */}
                <div
                  style={{ position: 'absolute', left: '-5000px' }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_671c8542725c29d88f8ea0ec8_994c3f54b6"
                    tabIndex="-1"
                    value=""
                  />
                </div>

                {/* submit */}
                <div className="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </form>
          </div>

          <p>
            You mentioned {user.with} are/is with you at the place where you
            feel a sense of belonging. Would you like to invite them or anyone
            else to go through this journey?
          </p>
          <p>Share it on Facebook</p>
          <div
            className="fb-share-button"
            data-href="https://buildthemock.netlify.app/"
            data-layout="button"
            data-size="large"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbuildthemock.netlify.app%2F&amp;src=sdkpreparse"
              className="fb-xfbml-parse-ignore"
            >
              Share
            </a>
          </div>
        </div>
        <VideoModal />
      </div>
    </>
  );
};

export default End;
