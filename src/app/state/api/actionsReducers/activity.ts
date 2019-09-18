import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiModel } from './index';
import { endpoints } from 'app/__consts__/endpoints';

const activities: ActivityResponceInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.activity}/select/`
  ),
};

export default activities;
