import './index.css'

const TabItem = props => {
  const {tabsList, onChangeId} = props
  const {displayText, tabId} = tabsList
  const onClicked = () => {
    onChangeId(tabId)
  }
  return (
    <li className="list">
      <button className="para" type="button" onClick={onClicked}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
