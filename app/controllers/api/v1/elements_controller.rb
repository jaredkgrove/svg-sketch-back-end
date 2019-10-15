class Api::V1::ElementsController < ApplicationController
    before_action :set_element, only: [:show]#, :update, :destroy]

    # GET /users
    def index
      @elements = Sketch.all
  
      render json: @element
    end
  
    # # GET /users/1
    def show
        element_json = ElementSketchSerializer.new(@element).serialized_json
      render json: element_json
      # render json: @user
    end
  
    # POST /users
    def create
      @element = Element.new(element_params)
  
      if @element.save
        render json: @element, status: :created, location: @element
      else
        render json: @element.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /users/1
    # def update
    #   if @user.update(user_params)
    #     render json: @user
    #   else
    #     render json: @user.errors, status: :unprocessable_entity
    #   end
    # end
  
    # # DELETE /users/1
    # def destroy
    #   @user.destroy
    # end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_element
        @element = Element.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def element_params
        params.require(:element).permit()
      end
end
