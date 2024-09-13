import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend, Area, AreaChart } from "recharts";

const dataLine = [
    {name: 'Sun', Current_Week: 40, Previous_Week: 33},
    {name: 'Mon', Current_Week: 30, Previous_Week: 20},
    {name: 'Tue', Current_Week: 20, Previous_Week: 10},
    {name: 'Wed', Current_Week: 27, Previous_Week: 17},
    {name: 'Thu', Current_Week: 18, Previous_Week: 28},
    {name: 'Fri', Current_Week: 23, Previous_Week: 33},
    {name: 'Sat', Current_Week: 34, Previous_Week: 44},
];

const lineColors = [
    { key: 'Current_Week', color: '#1ACE0A'},
    { key: 'Previous_Week', color: '#8E8E8E'},
];

const dataBar = [
    {name: 'Mon', Customers: 30, color: '#B9BBBD'},
    {name: 'Tue', Customers: 20, color: '#FF6B00'},
    {name: 'Wed', Customers: 50, color: '#B9BBBD'},
    {name: 'Thu', Customers: 40, color: '#FF6B00'},
    {name: 'Fri', Customers: 70, color: '#B9BBBD'},
    {name: 'Sat', Customers: 90, color: '#FF6B00'},
    {name: 'Sun', Customers: 100, color: '#B9BBBD'},
];

const dataPie = [
    {name: 'Delivery', value: 50, color: '#FF6B00'},
    {name: 'On delivery', value: 30, color: '#1ACE0A'},
    {name: 'Cancelled', value: 20, color: '#B9BBBD'},
];

const transactions = [
    { name: 'Chicken BBQ Burger', date: '16 May 2023, 14:00 PM', price: '$30,00' },
    { name: 'Chicken BBQ Burger', date: '16 May 2023, 14:00 PM', price: '$30,00' },
    { name: 'Chicken BBQ Burger', date: '16 May 2023, 14:00 PM', price: '$30,00' },
  ];

export default function DashboardContent() {
    return (
        <div className="grid grid-cols-1 gap-2">
            <h1 className="text-4xl font-bold text-[rgba(30, 30, 30, 1)]">Dashboard</h1>
            <p className="text-xl text-text-gray">Hi, Mark. Welcome back!</p> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 col-span-3">
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
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">$320</h2>
                        <p>Total Revenue</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
                    <h3 className="font-semibold mb-2">Order of the Week</h3>
                    <ResponsiveContainer width="100%" height={150}>
                        <AreaChart data={dataLine}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area 
                                type="monotone" 
                                dataKey="Current_Week" 
                                stroke="#82ca9d"
                                fill="rgba(130, 202, 157, 0.3)"
                                strokeWidth={2}
                                activeDot={{ r: 8 }}
                            />
                        </AreaChart>
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
                            <Bar 
                                dataKey="Customers" 
                                fill="#8884d8">
                                {dataBar.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color}/>
                                ))}
                            </Bar>
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
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg text-[#1E1E1E] mb-4">Latest Transactions</h3>
                    <ul className="space-y-4">
                        {transactions.map((transaction, index) => (
                        <li key={index} className="flex justify-between items-center">
                            <div>
                            <h4 className="font-medium text-[#FF6B00]">{transaction.name}</h4>
                            <p className="text-[#8A8B8C]">{transaction.date}</p>
                            </div>
                            <span className="text-[rgba(#1E1E1E] font-bold">{transaction.price}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white p-6 h-48 rounded-lg shadow-md col-span-3">
                    <h3 className="font-semibold mb-2">Total Revenue</h3>
                    <ResponsiveContainer>
                        <LineChart data={dataLine}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            {lineColors.map((entry, index) => (
                                <Line 
                                    key={`line-${index}`}
                                    type="monotone" 
                                    dataKey={entry.key}
                                    stroke={entry.color}
                                    strokeWidth={2}
                                    activeDot={{r: 8}}
                                    />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div> 
            </div>
        </div>
    );
}