TwitterDashboardApi::Application.routes.draw do
  get 'tweets/recent', to: 'tweets#recent'
end