import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import PieGraph from './PieGraph';

ChartJS.register(ArcElement, Tooltip, Legend);

function HomePage() {
    const [data, setData] = useState({
        datasets: [
            {
                data: [],
                backgroundColor: []
            }
        ],
        labels: []
    });
    const [d3Data, setd3Data] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3300/budget').then((res) => {
            setData({
                datasets: [
                    {
                        data: res.data.myBudget.map(i => i.budget),
                        backgroundColor: [
                            '#FF1C59',
                            '#DA1CFF',
                            '#591CFF',
                            '#AFBDF7',
                            '#243C9B',
                            '#243C9B',
                            '#00FC2A',
                            '#00FC2A'
                        ]
                    }
                ],
                labels: res.data.myBudget.map(i => i.title)
            });
            setd3Data(
                res.data.myBudget.map(i => ({label: i.title, value: i.budget}))
            )
        });
    }, [data]);

    return (
        <main className="container center">
            <section className="page-area" aria-live="polite" id="mainPage">

                <article className="text-box">
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money and where you are spending money unnecessarily? If you really need to save money and want to manage your expenditure properly, then our application is the best one.
                        You can view where you are spending and what are your expenses. Then you can cut the unnecessary expenses and will be able to save your money.
                    </p>
                </article>

                <article className="text-box">
                    <h1>Alerts</h1>
                    <p>
                        Are you worried if you spend too much and exceed your budget? Our application provides you an option to set a limit for certain budget amount.
                        Then later you will get notifications if you are exceeding the budget and you need not to worry about exceeding your budget anymore.
                    </p>
                </article>

                <article className="text-box">
                    <h1>Results</h1>
                    <p>
                        People want to save their money are not able to do that anymore due to temptation and lack of an effective application to monitor the expenses and show them the data on what
                        they are spending daily and how money is flowing out and with this application, users can get the data and identify the wrong or unnecessary spending so that 
                        they can cut those expenses and can save money by avoiding such expenses in future.
                    </p>
                </article>

                <article className="text-box">
                    <h1>Free</h1>
                    <p>
                        Why to worry about the extra expenses again. You deserve free service as the data is yours after all. The only burden you are having is 
                        worrying about your data as our application is easy and free to use.
                    </p>
                </article>

                <article className="text-box">
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that! Get all your expenses at one place to get valuable insights. Make sure to plan accordingly.
                    </p>
                </article>

                <article className="text-box">
                    <h1>Alerts</h1>
                    <p>
                        What if your clothing budget exceed? You will get an alert. The goal is to never go over the
                        budget and spend with full freedom but really within the budget. Money is valuable after all.
                    </p>
                </article>

                <article className="text-box">
                    <h1>Results</h1>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear...
                        because they know it is all good and accounted for.
                    </p>
                </article>

                <article className="text-box">
                    <h1>Comfortable User Interface</h1>
                    <p>
                        Our easy to use and simple interface allows you to seamlessly navigate throughout the whole application with ease! Just focus on the budget and start financial planning as soon as possible.
                    </p>
                </article>

                <article className="text-box">
                    <h1>Chart.js</h1>
                    {data.datasets[0].data.length === 0 ? <p>loading chart data....</p> : <Pie data={data}/>}
                </article>

                <article className="text-box">
                    <h1>D3.js</h1>
                    <PieGraph
                        data={d3Data}
                        width={400}
                        height={400}
                        innerRadius={40}
                        outerRadius={150}
                    />
                </article>

            </section>

        </main>
    )
        ;
}

export default HomePage;