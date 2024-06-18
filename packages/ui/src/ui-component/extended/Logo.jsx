import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            {/* <img
                style={{ objectFit: 'contain', height: 'auto', width: 150 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='Flowise'
            /> */}
            <h3 style={{ marginLeft: 10, color: customization.isDarkMode ? '#fff' : '#826eaa' }}>智慧工坊流程编排系统</h3>
        </div>
    )
}

export default Logo
