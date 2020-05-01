import React, { useContext } from 'react';
import { Context } from '../../../Helpers/Store/Store';
import styled from '@emotion/styled';
import './Player.scss';

export default function MediaControlCard() {
  const { store } = useContext(Context);

    const Frame = styled('div')`
      border-radius: 1em;
    `;

  return (
    <div className="player">
      <Frame>
        <iframe
          src={'https://open.spotify.com/embed/track/' + store.currentSong}
          width="540"
          height="520"
          allowtransparency="true"
          allow="encrypted-media"
          title="songPlayer"
          >
        </iframe>
      </Frame>
    </div> 
  )
}