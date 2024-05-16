// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    last7DaysVaccination: [],
    vaccinationByAge: [],
    vaccinationByGender: [],
  }

  componentDidMount = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(vaccinationDataApiUrl)
    const fetchedData = await response.json()
    if (response.ok) {
      const updatedLast7DaysVaccination =
        fetchedData.last_7_days_vaccination.map(eachdata =>
          this.formattedLast7DaysData(eachdata),
        )
      this.setState({
        last7DaysVaccination: updatedLast7DaysVaccination,
        vaccinationByAge: fetchedData.vaccination_by_age,
        vaccinationByGender: fetchedData.vaccination_by_gender,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  formattedLast7DaysData = data => ({
    vaccineDate: data.vaccine_date,
    dose1: data.dose_1,
    dose2: data.dose_2,
  })

  renderProgressView = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#5a8dee" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="faliure-container">
      <img
        className="faliure-img"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="failure-title">Something went wrong</h1>
    </div>
  )

  renderSuccessView = () => {
    const {last7DaysVaccination, vaccinationByAge, vaccinationByGender} =
      this.state
    return (
      <>
        <div className="chart-container">
          <h1 className="chart-heading">Vaccination Coverage</h1>
          <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        </div>
        <div className="chart-container">
          <h1 className="chart-heading">Vaccination By gender</h1>
          <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        </div>
        <div className="chart-container">
          <h1 className="chart-heading">Vaccination By age</h1>
          <VaccinationByAge vaccinationByAge={vaccinationByAge} />
        </div>
      </>
    )
  }

  renderChartsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderProgressView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-header">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1 className="logo-title">Co-WIN</h1>
        </div>
        <div className="charts-container">
          <h1 className="dashboard-title">CoWIN Vaccination in India</h1>
          {this.renderChartsView()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
