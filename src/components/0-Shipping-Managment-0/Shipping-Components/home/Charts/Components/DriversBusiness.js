import React from 'react'
import { RingProgress } from '@ant-design/plots';
export default function DriversBusiness() {


  const DemoRingProgress = () => {
    const config = {
      height: 100,
      width: 100,
      // autoFit: false,
      percent: 0.9,
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
    return <RingProgress {...config} />;
  };
  return (
    <div>
      <div className='bg-white p-3 py-4 rounded mt-3'>
        <div className='row'>
          <div className='col'>
            <div className='flex-center h-100'>
              <h6 className='fw-bolder'>أعمال السائقين</h6>
            </div>
          </div>
          <div className='col'>
            <DemoRingProgress />
          </div>
        </div>
      </div>
    </div>
  )
}
