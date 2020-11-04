import React from 'react'
import { Badge } from 'reactstrap';

const Welcome = ({goods}) => (
    <div>
      <h1>Good Pieces <Badge color="secondary">{goods}</Badge></h1>
    </div>
)

export default Welcome