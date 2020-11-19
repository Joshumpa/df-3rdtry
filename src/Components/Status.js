import { React, Fragment } from 'react'

function Welcome({ machine, good, time }) {
  return (
    <Fragment>
      <div className="machine bgOrange">
        <h1>Molder-A04</h1>
        <p>Lastest Update: {time}</p>
      </div>
      <div className="col center good bgOrange">
        <div className="bgGrey center title-good">
          <h3>Good Pieces</h3>
        </div>
        <div className="bgOrange center count-good">{good}</div>
      </div>
    </Fragment>
  )

}

export default Welcome