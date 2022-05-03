import { RiStarFill } from 'react-icons/ri'

export default function Stars( props ) {

  

  return (
    [...Array(props.amount)].map((e, i) => <RiStarFill /> )
  )
}
