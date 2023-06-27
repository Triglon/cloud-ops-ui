import CoreApi from '../api/CoreApi';
import { profileReducerActions } from '../store/reducers/profileReducer';
import store from '../store';
import { companyActions } from '../store/reducers/companyReducer';
import { LOGIN, ROOT } from '../constants';

export const login = async (email, password) => {
  localStorage.removeItem('company');
  const resp = await CoreApi.login(email, password);
  if (resp['success']) {
    const profile = await CoreApi.getProfile();
    await store.dispatch(profileReducerActions.updateProfile(profile.data));

    // TODO: allow company switching, for now we default to latest registered company
    const company = profile?.data?.companies[0];

    if (company) {
      await store.dispatch(companyActions.setCompany(company));
    }

    window.location.href = '/';
  }

  return resp;
};
