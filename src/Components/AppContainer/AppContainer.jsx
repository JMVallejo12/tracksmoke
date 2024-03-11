import './AppContainerStyle.css'
import DaysContainer from '../DaysContainer/DaysContainer'
import StatsContainer from '../StatsContainer/StatsContainer'
import ProfileContainer from '../ProfileContainer/ProfileContainer'

function AppContainer(){

    return(
        <div className='app-super-container'>
            <div className="app-container">
                <DaysContainer />
                <StatsContainer />
                <ProfileContainer />
            </div>
        </div>
    )
}

export default AppContainer