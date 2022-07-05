import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
    const data = [
        {
            type: 'Sat',
            value: 0.16,
        },
        {
            type: 'Sun',
            value: 0.125,
        },
        {
            type: 'Mon',
            value: 0.24,
        },
        {
            type: 'Tus',
            value: 0.19,
        },
        {
            type: 'Wen',
            value: 0.22,
        },
        {
            type: 'Thu',
            value: 0.05,
        },
        {
            type: 'Fri',
            value: 0.01,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: '',
        color: '#FBA30D',
        legend: false,

    };
    return (
        <div>
            <div className='bg-white p-3 py-4 rounded'>

                <div className='row'>
                    <div className='col-3'>
                        <div className='flex-center h-100'>
                            <h6 className='fw-bolder'>عرض الطلبات</h6>
                        </div>
                    </div>
                    <div className='col-9'>
                        <Column {...config} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoColumn
