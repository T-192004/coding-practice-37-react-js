// Write your code here
import {PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={vaccinationByGender}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Other" fill="#2d87bb" />
        </Pie>
        <Legend
          iconType="Circle"
          layout="horizontal"
          horizontalAlign="middle"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByGender
