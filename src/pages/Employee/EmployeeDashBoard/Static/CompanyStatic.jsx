import React from 'react';
import "./car-status.css";
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
        <div className="company-status-container">
            <div className="dataCard revenueCard">
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
            <div className="dataCard customerCard">
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

            <div className="dataCard categoryCard">
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
