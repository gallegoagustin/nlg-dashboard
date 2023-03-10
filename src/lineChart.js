import React from 'preact/compat';
import { useMemo } from 'preact/hooks';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
import { Line } from 'react-chartjs-2';

const scores = [6, 5, 5, 5, 3, 4, 6, 4, 9, 2];
const labels = [100, 200, 300, 400, 500, 600, 700];

const options = {
    responsive: true,
};

export const LineChart = () => {
    const data = useMemo(() => {
        return {
            datasets: [
                {
                    label: '',
                    data: scores,
                    tension: 0.3,
                },
            ],
            labels,
        };
    }, []);
    return <Line data={data} options={options} />;
};
