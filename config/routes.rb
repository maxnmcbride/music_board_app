Rails.application.routes.draw do
  resources :comments
  resources :users
  resources :discussions
end
