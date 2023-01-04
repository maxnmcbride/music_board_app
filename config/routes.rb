Rails.application.routes.draw do
  resources :comments
  resources :users
  resources :discussions
  post "/login", to: "sessions#create"
  # we are using post because we are SENDING data
  # this is how we create a custom route, we need an HTTP verb, the name of the route, and the controller 
  # that is if going to along with the controller action 
end
