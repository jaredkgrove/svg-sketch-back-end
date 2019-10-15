class Api::V1::SketchController < ApplicationController
    def index
        
        render status: 200, json: { text: 'WOOOHOO'}
        # q = params[:q]
    
        # if q.blank?
        #   render status: 400, json: { error: 'Expected parameter `q` '}
        # else
        #   render(
        #     status: 200,
        #     json: Food.where(["description LIKE ?", "%#{q}%"]).limit(100)
        #   )
    end
end
