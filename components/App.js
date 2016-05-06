import React from 'react'
import { Link, browserHistory } from 'react-router'
import MainNavigation from './MainNavigation'
import Header from './Header'

export default function App({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <MainNavigation items={[
          {title: 'НОД', url: '/gcd'},
          {title: 'ax + by = 1', url: '/axby1'},
          {title: 'Цепная дробь', url: '/fraction'},
          {title: 'Подходящие дроби', url: '/suit'},
          {title: 'Обратоное число', url: '/rev'},
          {title: 'Диофантово уравнение ', url: '/diofan'},
          {title: 'Деление многочлена на бином', url: '/div'},
        ]}/>
        <main id="content">{children}</main>
      </div>
    </div>
  )
}
