import React from 'react'
import Charts from '../../../components/admin/Charts/Charts'
import FeatureCharts from '../../../components/admin/featureCharts/FeatureCharts'
import NavBar from '../../../components/admin/navBar/NavBar'
import SideBar from '../../../components/admin/sideBar/SideBar'
import Tables from '../../../components/admin/Table/Tables'
import Widgets from '../../../components/admin/widgets/Widgets'
import "./Home.scss"

function Home() {
  return (
    <div className='home '>
          <SideBar/>
      <div className="homeContainer">
        <NavBar/>
        <div className="widgets">
          < Widgets type='users' />
          < Widgets type='Trainers'/>
          < Widgets type='orders'/>
          < Widgets type='plans'/>
        </div>
        <div className="charts">
            <FeatureCharts/>
            <Charts/>
          </div>
          <div className="listContainer">
            <div className="listTitle primary-Color">Latest Transactions</div>
            <Tables/>
          </div>
      </div>
    </div>
  )
}

export default Home
