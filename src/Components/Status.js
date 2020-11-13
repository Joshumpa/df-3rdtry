import { React, Fragment } from 'react'
import { Badge } from 'reactstrap';

function Welcome({ good, time }) {
  return (
    <Fragment>
      <div className="status row">
        <div className="machine col bgOrange">
          <h1>Molder-A04</h1>
          <p>Lastest Update <Badge color="secondary">{time}</Badge></p>
          <p></p>
        </div>
        <div className="good bgOrange">
          <div>
            <h3>Good Pieces</h3>
          </div>
          <div>{good}</div>
        </div>
      </div>
    </Fragment>
  )

}

export default Welcome