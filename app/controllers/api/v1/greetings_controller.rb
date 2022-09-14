class Api::V1::GreetingsController < ApplicationController
   protect_from_forgery with: :null_session

    def index
        @greeting = Greeting.order("RANDOM()").first
        render json: GreetingSerializer.new(@greeting).serialized_json
    end

    def update
        @greeting = Greeting.order("RANDOM()").first
        render json: GreetingSerializer.new(@greeting).serialized_json
    end    
end
