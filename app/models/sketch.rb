class Sketch < ApplicationRecord
    has_many :elements
    accepts_nested_attributes_for :elements
    
    def update_sketch_elements_from_json(data)
        data['elements'].each do |element_data|
            if element_data['properties']['id']
                #return
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
