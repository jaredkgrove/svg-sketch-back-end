class Api::V1::SketchesController < ApplicationController
    before_action :set_sketch, only: [:show, :update]#, :destroy]

    def index
      @sketches = Sketch.all
      sketches_json = SketchSerializer.new(@sketches).serialized_json
      render json: sketches_json
    end

    def index_including_elements
      @sketches = Sketch.all
      sketches_json = SketchSerializer.new(@sketches, {include: [:elements]}).serialized_json
      render json: sketches_json
    end
  
    def show
      sketch_json = SketchSerializer.new(@sketch, {include: [:elements]}).serialized_json
      render json: sketch_json
    end
  
    def create
      @sketch = Sketch.new(sketch_params)
      if @sketch.save
        sketch_json = SketchSerializer.new(@sketch, {include: [:elements]}).serialized_json
        render json: sketch_json, status: :created
      else
        render json: @sketch.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @sketch.update_sketch_elements_from_json(elements_attributes_params)
      if @sketch.save
        sketch_json = SketchSerializer.new(@sketch, {include: [:elements]}).serialized_json
        # binding.pry
        render json: sketch_json
       else
         render json: @sketch.errors, status: :unprocessable_entity
       end
    end
  
    # # DELETE /users/1
    # def destroy
    #   @user.destroy
    # end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_sketch
        @sketch = Sketch.find(params['id'])
      end
  
      # Only allow a trusted parameter "white list" through.
      def sketch_params
        params.require(:sketch).permit(:name)
      end

      def elements_attributes_params
        params.permit(elements: [:type, properties: [:id, :cx, :cy, :r, :stroke, :fill, :stroke_width]])
      end
end
