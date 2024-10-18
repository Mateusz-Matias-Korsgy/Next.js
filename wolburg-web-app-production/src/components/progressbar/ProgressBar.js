import React from 'react';
import { Line } from 'rc-progress';

const Progressbar = (props) => {
  const { percent } = props;
  return (
    <div className='my-4'>
      <Line
        percent={percent}
        strokeWidth={3}
        trailWidth={0}
        strokeColor="rgba(46, 216, 109, 0.96)"
      />
    </div>
  );
}

export default Progressbar;