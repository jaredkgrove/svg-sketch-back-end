class Sketch < ApplicationRecord
    has_many :elements
    # has_many :elementables, :through :elements
    # has_many :elementables, through: :elements, source_type: :elements_elementables
    accepts_nested_attributes_for :elements

    # def self.new_from_params(sketch_data)
    #     sketch = Sketch.new()
    #     binding.pry
    #     sketch_data['elements'].each do |element_data|
    #         Element.build_element_from_json(sketch, element_data)
    #     end
        
    #     sketch
    # end

    # def create_sketch_elements_from_json(data)
    #     data['elements'].each do |element_data|
    #         if element_data['type'] == 'Circle'
    #             circle = Circle.create(element_data['properties'])
    #             element =  circle.create_element(sketch: self)
    #         elsif element_data['type'] == 'Rect'
    #             rect = Rect.create(element_data['properties'])
    #             element = rect.create_element(sketch: self)
    #         elsif element_data['type'] == 'Line'
    #             line = Line.create(element_data['properties'])
    #             element = line.create_element(sketch: self)
    #         end
    #     end
    # end

    
    def update_sketch_elements_from_json(data)
        # previous_element_ids =  self.elements.collect{|element| element.id}
        # current_element_ids = data['elements'].collect{|element| element['properties']['id']}.compact

        # (previous_element_ids - current_element_ids).each do |id|
        #     Element.destroy(id)
        # end

        # (previous_element_ids - current_element_ids).each do |id|
        #     Element.destroy(id)
        # end

        # self.elements.each do |element| 
        #     element.elementable.update( data['elements'].find())
        # end

        data['elements'].each do |element_data|

            if element_data['properties']['id']
                # self.elements.(element_data['properties']['id'])
            elsif element_data['type'] == 'Circle'
                circle = Circle.create(element_data['properties'])
                element =  circle.create_element(sketch: self)
            elsif element_data['type'] == 'Rectangle'
                rect = Rectangle.create(element_data['properties'])
                element = rect.create_element(sketch: self)
            elsif element_data['type'] == 'Line'
                line = Line.create(element_data['properties'])
                element = line.create_element(sketch: self)
            elsif element_data['type'] == 'Polyline'
                polyline = Polyline.create(element_data['properties'])
                element = polyline.create_element(sketch: self)
            end
        end
    end
end
