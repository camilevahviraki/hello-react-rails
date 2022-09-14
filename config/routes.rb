Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "greetings#index"
  get 'greeting', to: "greetings#index"

  namespace :api do
    namespace :v1 do
      get 'greetings', to: "greetings#index"
      post 'greetings', to: "greetings#update"
    end
  end
end
