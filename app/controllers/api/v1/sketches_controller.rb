class Api::V1::SketchesController < ApplicationController
    before_action :set_sketch, only: [:show]#, :update, :destroy]

    # GET /users
    def index
      @sketches = Sketch.all
  
      render json: @sketch
    end
  
    # # GET /users/1
    def show
      sketch_json = SketchSerializer.new(@sketch).serialized_json
      render json: sketch_json
      # render json: @user
    end
  
    # POST /users
    def create
      @sketch = Sketch.new(sketch_params)
  
      if @sketch.save
        render json: @sketch, status: :created, location: @sketch
      else
        render json: @sketch.errors, status: :unprocessable_entity
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
      def set_sketch
        @sketch = Sketch.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def sketch_params
        params.require(:sketch).permit()
      end
end
