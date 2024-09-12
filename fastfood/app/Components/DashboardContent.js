import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from "recharts";

const dataLine = [
    {name: 'Sun', value: 40},
    {name: 'Mon', value: 30},
    {name: 'Tue', value: 20},
    {name: 'Wed', value: 27},
    {name: 'Thu', value: 18},
    {name: 'Fri', value: 23},
    {name: 'Sat', value: 34},
];

const dataBar = [
    {name: 'Mon', Customers: 30},
    {name: 'Tue', Customers: 20},
    {name: 'Wed', Customers: 50},
    {name: 'Thu', Customers: 40},
    {name: 'Fri', Customers: 70},
    {name: 'Sat', Customers: 90},
    {name: 'Sun', Customers: 100},
];

const dataPie = [
    {name: 'Delivery', value: 50, color: '4CAF50'},
    {name: 'On delivery', value: 30, color: 'FF9800'},
    {name: 'Cancelled', value: 20, color: 'F44336'},
];

export default function DashboardContent() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">85</h2>
                <p>Total Orders</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">280</h2>
                <p>Total Delivery</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">10</h2>
                <p>Total Cancelled</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
                <h3 className="font-semibold mb-2">Order of the Week</h3>
                <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={dataLine}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={2}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Customers</h3>
                <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={dataBar}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Bar dataKey="Customers" fill="#8884d8"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
                <h3 className="font-semibold mb-2">Latest Orders</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={dataPie}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={50}
                            fill="#8884d8"
                            label
                            >
                            {dataPie.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color}/>
                            ))}
                        </Pie>
                        <Tooltip/>
                        <Legend/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 h-48 rounded-lg shadow-md col-span-3">
                <h3 className="font-semibold mb-2">Total Revenue</h3>
                <ResponsiveContainer>
                    <LineChart data={dataLine}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}