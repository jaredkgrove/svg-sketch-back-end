class Api::V1::SketchesController < ApplicationController
    before_action :set_sketch, only: [:show]#, :update, :destroy]

    # GET /users
    def index
      @sketches = Sketch.all
      # puts @sketches
      # MovieSerializer.new([movie, movie], options).serialized_json
      render json: @sketches
    end
  
    # # GET /users/1
    def show
      sketch_json = SketchSerializer.new(@sketch, {include: [:elements]}).serialized_json
      render json: sketch_json
      # render json: @user
    end
  
    # POST /users
    def create

      @sketch = Sketch.new(sketch_params)
      
      if @sketch.save
        @sketch.create_sketch_elements_from_json(elements_attributes_params)
        sketch_json = SketchSerializer.new(@sketch, {include: [:elements]}).serialized_json
        # binding.pry
        render json: sketch_json, status: :created#, location: @sketch
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
        params.require(:sketch).permit(:name)
      end

      def elements_attributes_params
        params.permit(elements: [:type, properties: [:cx, :cy, :r, :stroke, :fill, :stroke_width]])
      end
end
