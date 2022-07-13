import { Title } from '@material-ui/icons'
import Styles from './Header.module.css'

const Header = ({title}) => {
     return (
     <div className={Styles.header}>
          {title}
     </div>)
}

module.exports = Header
