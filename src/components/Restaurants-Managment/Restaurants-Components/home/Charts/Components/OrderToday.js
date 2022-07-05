import React from 'react'
import { RingProgress } from '@ant-design/plots';
export default function OrderToday() {


  const DemoRingProgress = () => {
    const config = {
      height: 100,
      width: 100,
      // autoFit: false,
      percent: 0.6,
      color: ['#FBA30D', '#FFF0'],
      innerRadius: 0.85,
      radius: 0.98,
      statistic: {
        title: {
          style: {
            color: '#363636',
            fontSize: '12px',
            lineHeight: '14px',
          },
          // formatter: () => '进度',
        },
      },
    };
    // const config = {
    //   height: 100,
    //   width: 100,
    //   autoFit: false,
    //   innerRadius: 0.85,
    //   percent: 0.7,
    //   color: ['#FBA30D', '#FFF0'],
    // };
    return <RingProgress {...config} />;
  };
  return (
      <div className='bg-white p-3 py-4 rounded'>
        <div className='row'>
          <div className='col'>
            <div className='flex-center h-100'>
              <h6 className='fw-bolder'>طلبات اليوم</h6>
            </div>
          </div>
          <div className='col'>

            <DemoRingProgress />
          </div>
        </div>
      </div>
  )
}
