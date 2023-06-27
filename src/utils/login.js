import CoreApi from '../api/CoreApi'
import { updateProfile } from '../reducers/profileSlice'
import Router from 'next/router'
import store from '../reducers/store'
import { companyActions } from '../reducers/companySlice'

export const login = async (email, password) => {
  localStorage.removeItem('company')
  const resp = await CoreApi.login(email, password)
  console.log(resp)
  if (resp['success']) {
    const profile = await CoreApi.getProfile()
    await store.dispatch(updateProfile(profile.data))
    console.log(profile)
    // TODO: allow company switching, for now we default to latest registered company
    const company = profile?.data?.companies[0]
    console.log(company)
    await store.dispatch(companyActions.setCompany(company))

    Router.push('/').catch(console.error)
  }
  return resp
}
