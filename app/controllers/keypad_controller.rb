class KeypadController < ApplicationController
  def index
    combinations = Keypad.possible_words(params[:number])
    render json: combinations
  end
end
