import React from 'react'
import TopBar from '../components/bars/TopBar'
import SettingTabs from '../components/Setting/Setting'
import { MarginPages } from '../styles/MarginPages'

export default function Setting() {
  return (
    <div className='lay-out-wrapp'>
        <TopBar title="الاعدادات"   /> 
        <SettingTabs />
    </div>
  )
}
