import './AppContainerStyle.css'
import DaysContainer from '../DaysContainer/DaysContainer'
import StatsContainer from '../StatsContainer/StatsContainer'

function AppContainer(){

    return(
        <div className="app-container">
            <DaysContainer />
            <StatsContainer />
        </div>
    )
}

export default AppContainer