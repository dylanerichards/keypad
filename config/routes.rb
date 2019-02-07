Rails.application.routes.draw do
  get "/combinations", to: "keypad#index"
  get 'keypad/index'
end
