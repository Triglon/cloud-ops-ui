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

  static getProjectDetails = async (id) => {
    return await core_axios.get(`/fleet-project/${id}`);
  };

  static getProjects = async () => {
    return await core_axios.get('/fleet-project');
  };

  static getCloudAccounts = async () => {
    return await core_axios.get('/fleet-account');
  };

  static createAccount = async (email, password, confirmed_password, company) => {
    return await core_axios.post('/profile', { email, password, confirmed_password, company });
  };

  static createPlatform = async (data) => {
    return await core_axios.post('/platform', insertCompanyData(data));
  };

  static createPage = async (data) => {
    return await core_axios.post('/page', insertCompanyData(data));
  };

  static createProduct = async (data) => {
    return await core_axios.post('/product', insertCompanyData(data));
  };

  static updateProduct = async (id, data) => {
    return await core_axios.patch(`/product/${id}`, insertCompanyData(data));
  };

  static updateCompany = async (id, data) => {
    return await core_axios.patch(`/company/${id}`, data);
  };

  static updateCompanyLogo = async (id, file) => {
    const formData = new FormData();
    formData.append('logo', file);

    return await core_axios.patch(`/company/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };

  static getProducts = async (params) => {
    return await core_axios.get('/product', { params });
  };

  static getOrders = async (params) => {
    return await core_axios.get('/order', { params });
  };

  static sendOrderItemMessage = async (orderItemId, codeOverride) => {
    const data = { code: codeOverride };
    return await core_axios.post(`/order-item/${orderItemId}/send-message/`, data);
  };

  static sendOrderInvoice = async (orderId) => {
    return await core_axios.post(`/order/${orderId}/send-invoice/`);
  };

  static generateOrderInvoice = async (orderId) => {
    return await core_axios.post(`/order/${orderId}/generate-invoice/`);
  };

  static getMinerGroups = async (params) => {
    return await core_axios.get('/miner-group', { params });
  };

  static getCustomers = async (params) => {
    return await core_axios.get('/customer', { params });
  };

  static getComments = async (params) => {
    return await core_axios.get('/event-comment', { params });
  };

  static getSocialPages = async () => {
    return await core_axios.get(`/page/`, { params: { page_size: 50 } });
  };

  static getEvents = async (showZeroComments = false) => {
    return await core_axios.get(`/event/`, { params: { page_size: 6, show_zero_activity: showZeroComments } });
  };

  static getLivePages = async (platform) => {
    return await core_axios.get(`/platform/${platform}/live-pages`);
  };

  static getCompanyStats = async (companyId, startDate, endDate) => {
    return await core_axios.get(`/company/${companyId}/summary`, { params: { start_date: startDate, end_date: endDate } });
  };

  static getByLink = async (link) => {
    const response = await core_axios.get(link);
    return response.data;
  };

  static deletePage = async (page) => {
    const response = await core_axios.delete(`/page/${page}`);
    return response.data;
  };
}
