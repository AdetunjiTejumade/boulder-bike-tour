Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'submissions/index'
      post 'submissions/create'
    end
  end
  root 'pages#index'

  match '*path', to: 'pages#index', via: :all

  
end
