import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    BarElement
} from 'chart.js';
import revenueData from "../../FakeData/revenueData.json";
import sourceData from "../../FakeData/sourceData.json";

// Register the plugins with ChartJS
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    BarElement
);

const CompanyStatus = () => {
    return (
        <div className="bg-slate-300 m-2 grid grid-rows-3 grid-flow-col gap-4 p-2">
            <div className="row-span-3 box-border h-90  p-4 border-4"> 
                <Line
                    data={{
                        labels: revenueData.map((data) => data.label),
                        datasets: [
                            {
                                label: "Revenue",
                                data: revenueData.map((data) => data.revenue),
                                backgroundColor: "black",
                                borderColor: "black",
                            },
                            {
                                label: "Cost",
                                data: revenueData.map((data) => data.cost),
                                backgroundColor: "gray",
                                borderColor: "gray",
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        elements: {
                            line: {
                                tension: 0.5,
                            },
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: "Monthly Revenue & Cost",
                                align: "start",
                                font: {
                                    size: 20,
                                },
                                color: "black",
                            },
                        },
                    }}
                />
            </div>
            <div className="col-span-2 box-border h-48 p-4 border-4">
                <Bar
                    data={{
                        labels: sourceData.map((data) => data.label),
                        datasets: [
                            {
                                label: "Count",
                                data: sourceData.map((data) => data.value),
                                backgroundColor: [
                                    "black",
                                    "gray",
                                    "white"
                                ],
                                borderRadius: 5,
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false, // Allow it to adapt to container

                        plugins: {
                            title: {
                                text: "Total Cars, Coupons and offers",
                                display: true,
                                font: {
                                    size: 20,
                                },
                                color: "black"
                            },
                        },
                    }}
                />
            </div>

            <div className="row-span-2 col-span-2 box-border h-70 p-4 border-4">
                <Doughnut
                    data={{
                        labels: sourceData.map((data) => data.label),
                        datasets: [
                            {
                                label: "Count",
                                data: sourceData.map((data) => data.value),
                                backgroundColor: [
                                    "black",
                                    "gray",
                                    "white"
                                ],
                                borderColor: [
                                    "black",
                                    "gray",
                                    "white"
                                ],
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false, // Allow it to adapt to container
                        plugins: {
                            title: {
                                text: "Car Status",
                                display: true,
                                font: {
                                    size: 20,
                                },
                                color: "black"
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default CompanyStatus;
