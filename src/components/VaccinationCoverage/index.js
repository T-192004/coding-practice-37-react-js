// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={last7DaysVaccination}>
        <CartesianGrid strokeDasharray="0" visibility="hidden" />
        <XAxis dataKey="vaccineDate" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="dose1" fill="#5a8dee" name="Dose 1" labels="Dose 1" />
        <Bar dataKey="dose2" fill="#f54394" name="Dose 2" labels="Dose 2" />
        <Legend
          iconType="Square"
          layout="horizontal"
          verticalAlign="bottom"
          horizontalAlign="bottom"
          align="center"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
