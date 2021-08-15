import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div >
            <h1 className={headerStyles.title}>
                <span>WholenessWeb</span> News
            </h1>
            <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
            <hr />
        </div>
    )
}

export default Header
