import { useState } from 'react'
import GraphPlotter from '../components/GraphPlotter';

const Home = () => {
  const [xData, setXData] = useState<string>('')
  const [yData, setYData] = useState<string>('')
  const [data, setData] = useState<{ x: number[]; y: number[] } | null>(null)

  const handlePlot = () => {
    const x = xData.split(',').map(Number)
    const y = yData.split(',').map(Number)
    if (x.length === y.length) {
      setData({ x, y })
    } else {
      alert("X and Y values must have the same length.")
    }
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">React Graph Plotter</h1>
      <input
        type="text"
        placeholder="X-axis values (comma separated)"
        className="border p-2 mb-2 w-full max-w-md block"
        value={xData}
        onChange={(e) => setXData(e.target.value)}
      />
      <input
        type="text"
        placeholder="Y-axis values (comma separated)"
        className="border p-2 mb-2 w-full max-w-md block"
        value={yData}
        onChange={(e) => setYData(e.target.value)}
      />
      <button
        onClick={handlePlot}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Plot Graph
      </button>
      {data && <GraphPlotter x={data.x} y={data.y} />}
    </div>
  )
}

export default Home
