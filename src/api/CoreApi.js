import core_axios from './core_axios';

const insertCompanyData = (data) => {
  return { ...data, ...{ company: localStorage.getItem('company') } };
};

export default class CoreApi {
  static login = async (email, password) => {
    const response = await core_axios.post('/token', {
      email,
      password
    });
    if (response.success) {
      localStorage.setItem('token', response.data.token);
    }

    return response;
  };

  static getProfile = async () => {
    return await core_axios.get('/my-profile');
  };

  static getRepoLoginUrl = async (provider) => {
    return await core_axios.get(`/accounts/${provider}/login/url`);
  };

  static updateRepoConnection = async (repoConnectionId, uid) => {
    return await core_axios.put(`/repository-connection/${repoConnectionId}/`, { uid });
  };

  static getRepoConnections = async () => {
    return await core_axios.get(`/repository-connection/`);
  };

  static getRepositories = async (repoConnectionId) => {
    return await core_axios.get(`/repository-connection/${repoConnectionId}`);
  };

  static getBranches = async (repoConnectionId, repoName) => {
    return await core_axios.get(`/repository-connection/${repoConnectionId}/branches?repo_name=${repoName}`);
  };

  static getProjectDetails = async (id) => {
    return await core_axios.get(`/fleet-project/${id}`);
  };

  static getProjects = async () => {
    return await core_axios.get('/fleet-project');
  };

  static createProject = async (name, accountId, region) => {
    return await core_axios.post('/fleet-project', {
      name: name,
      account: accountId,
      region: region
    });
  };

  static getCloudAccounts = async () => {
    return await core_axios.get('/fleet-account');
  };

  static createCloudAccount = async (alias, accountId, accessKeyId, secretAccessKey, provider = 'aws') => {
    return await core_axios.post('/fleet-account', {
      alias: alias,
      account_id: accountId,
      access_key_id: accessKeyId,
      secret_access_key: secretAccessKey
    });
  };

  static createAccount = async (email, password, confirmed_password, company) => {
    return await core_axios.post('/profile', { email, password, confirmed_password, company });
  };
}
