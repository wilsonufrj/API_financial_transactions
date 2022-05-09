import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Link} from 'react-router-dom';
import "./style.css";
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import { Form } from '../components/form/App';
import DataTableDemo from '../components/DataList/App';


function Month() {

    const [chartData] = useState({
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#BF3030"
                ],
                hoverBackgroundColor: [
                    "#64B5F6",
                    "#81C784",
                    "#FFB74D"
                ]
            }
        ]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });


    return(
        <div>
            <Link to="/">
                <Button> Voltar</Button>
            </Link>
            <div className='mainContainer'>
                <div>
                    <Chart className='pieStyle' type="pie" data={chartData} options={lightOptions} />
                </div>
                <div className='cardsTransacion'>
                    <Card title="Ganho">
                       <Form/>
                    </Card>
                </div>
            </div>
            <div>
             <DataTableDemo/>
            </div>
         </div>
        
    )
}

export default Month;