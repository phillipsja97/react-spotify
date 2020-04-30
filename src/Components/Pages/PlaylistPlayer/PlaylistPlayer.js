import React from 'react';
import styled from '@emotion/styled';
import './PlaylistPlayer.scss';

export default function PlaylistPlayer(props) {

    const Frame = styled('div')`
      border-radius: 1em;
    `;

  return (
    <div className="player">
      <Frame>
      <iframe 
      src={'https://open.spotify.com/embed/playlist/' + props.match.params.id}
      width="800" 
      height="880" 
      frameborder="0" 
      allowtransparency="true" 
      allow="encrypted-media">
      </iframe>
      </Frame>
    </div>
  );
}