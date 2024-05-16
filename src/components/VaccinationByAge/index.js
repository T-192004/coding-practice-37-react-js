// Write your code here
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  console.log(vaccinationByAge)
  return (
    <PieChart width={1000} height={500}>
      <Pie
        width={100}
        height={100}
        cx="70%"
        cy="40%"
        data={vaccinationByAge}
        startAngle={0}
        endAngle={360}
        outerRadius="70%"
        dataKey="count"
      />
      <Cell name={vaccinationByAge[0].age} fill="#5a8dee" />
      <Cell name={vaccinationByAge[1].age} fill="#2cc6c6" />
      <Cell name={vaccinationByAge[2].age} fill="#a3df9f" />
  </Pie>
      <Legend
        iconType="Circle"
        layout="horizontal"
        horizontalAlign="middle"
        verticalAlign="bottom"
        align="center"
      />
          
    </PieChart>
  )
}

export default VaccinationByAge

//
//     </Pie>
//
//   </PieChart>
