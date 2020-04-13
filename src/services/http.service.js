import axios from 'axios';

import { api as config } from '../apiconfig';

const $http = axios.create(config);

export default $http;
