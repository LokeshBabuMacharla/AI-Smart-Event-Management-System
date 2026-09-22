import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const lineData = [
  { month: "Jan", events: 12 },
  { month: "Feb", events: 18 },
  { month: "Mar", events: 25 },
  { month: "Apr", events: 20 },
  { month: "May", events: 32 },
  { month: "Jun", events: 40 },
  { month: "Jul", events: 48 },
  { month: "Aug", events: 55 },
];

const barData = [
  { name: "Conference", value: 18 },
  { name: "Workshop", value: 12 },
  { name: "Festival", value: 9 },
  { name: "Seminar", value: 15 },
];

const pieData = [
  { name: "Completed", value: 65 },
  { name: "Upcoming", value: 25 },
  { name: "Cancelled", value: 10 },
];

const COLORS = [
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
];

function Charts() {
  return (
    <div className="space-y-8">

      {/* Top Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Line Chart */}
        <div className="xl:col-span-2 bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

          <div className="flex justify-between items-center mb-6">

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Monthly Events
              </h2>

              <p className="text-gray-500 text-sm">
                Event growth over the last eight months
              </p>
            </div>

          </div>

          <ResponsiveContainer width="100%" height={350}>

            <LineChart data={lineData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="events"
                stroke="#0891b2"
                strokeWidth={4}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Event Status
          </h2>

          <ResponsiveContainer width="100%" height={320}>

            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                innerRadius={55}
                paddingAngle={5}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Bottom Chart */}
      <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

        <div className="mb-6">

          <h2 className="text-2xl font-bold text-slate-800">
            Events by Category
          </h2>

          <p className="text-gray-500">
            Distribution of event types
          </p>

        </div>

        <ResponsiveContainer width="100%" height={350}>

          <BarChart data={barData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="value"
              radius={[10, 10, 0, 0]}
              fill="#3b82f6"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default Charts;