Rails.application.routes.draw do
  root 'pages#index'

  match '*path', to: 'pages#index', via: :all
end
