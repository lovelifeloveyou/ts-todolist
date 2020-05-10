import { IAuthData, LOGIN, LoginActionTypes, REGISTER, RegActionsTypes } from './types'

export const login: (user: IAuthData) => LoginActionTypes = (user) => ({
  type: LOGIN,
  payload: user
})

export const register: (user: IAuthData) => RegActionsTypes = (user) => ({
  type: REGISTER,
  payload: user
})