import React from 'react';
import styled from '@emotion/styled';

export default function PlaylistPlayer(props) {

    const Frame = styled('div')`
      border-radius: 1em;
    `;

  return (
    <div className="player">
      <Frame>
        <iframe
          title={props.match.params.id}
          className="embed-container"
          src={'https://open.spotify.com/embed?uri=spotify:playlist:' + props.match.params.id}
          frameBorder="0"
          allowtransparency="true"
          width='100%'
          height='100%'
          allow="encrypted-media">
        </iframe>
      </Frame>
    </div>
  );
}