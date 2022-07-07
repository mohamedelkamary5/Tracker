import { configureStore } from '@reduxjs/toolkit'
import ClintSlice from './ClintSlice'
import ClintSlice2 from './ClintSlice2'
import ShippingSlice from './ShippingSlice'
import StateSlice from './StateSlice'
import auth from './authSlice'
import ManagersSlice from './ManagersSlice'
import QuotesSlice from './QuotesSlice'
import DriverSlice from './DriverSlice'
import CurrencySlice from './CurrencySlice'
import OrdersRestauantsSlice from './Restaurants-Managment/OrdersRestauantsSlice'
import  DriverRestauantsSlice  from './Restaurants-Managment/DriverRestauantsSlice'

export const store = configureStore({
  reducer: {
    clint: ClintSlice,
    clients2: ClintSlice2,
    drivers: DriverSlice,
    shipping: ShippingSlice,
    currency: CurrencySlice,
    ShowAndHide: StateSlice,
    managers: ManagersSlice,
    quotes: QuotesSlice,
    auth: auth,

    // restaurantsManagment
    ordersRestauants: OrdersRestauantsSlice,
    driversRestaurant: DriverRestauantsSlice,
  },
})