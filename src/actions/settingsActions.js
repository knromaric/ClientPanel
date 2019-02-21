import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from './types';


export const setDisableBalanceOnAdd=()=>{
  const settings = toggleState('disableBalanceOnAdd');
  return{
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  }
}

export const setDisableBalanceOnEdit=()=>{
  const settings = toggleState('disableBalanceOnEdit');
  return{
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  }
}

export const setAllowRegistration=()=>{
  const settings = toggleState('allowRegistration');
  return{
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration
  }
}

function toggleState(state) {
  //get settings from localstorage
  const settings = JSON.parse(localStorage.getItem('settings'));
  //toggle
  settings[state] = !settings[state];
  //set back to localstorage
  localStorage.setItem('settings', JSON.stringify(settings));
  return settings;
}
