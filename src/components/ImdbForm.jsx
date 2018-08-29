import React from 'react'

const ImdbForm = props => (
 <div>
      <form onSubmit={props.getImdbData}>
        <input name="moovieName" />
        <button>Начать поиск...</button>
    </form>
 </div>
)
export default ImdbForm