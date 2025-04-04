import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface Props {
  x: number[]
  y: number[]
}

const GraphPlotter: React.FC<Props> = ({ x, y }) => {
  const data = {
    labels: x,
    datasets: [
      {
        label: 'Sample Plot',
        data: y,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  }

  return (
    <div className="mt-6 max-w-3xl">
      <Line data={data} />
    </div>
  )
}

export default GraphPlotter
