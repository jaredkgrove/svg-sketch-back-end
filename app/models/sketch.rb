class Sketch < ApplicationRecord
    belongs_to :user
    has_many :elements
    accepts_nested_attributes_for :elements

    def self.new_from_params(sketch_data)
        sketch = Sketch.new()
        binding.pry
        sketch_data['elements'].each do |element|
            sketch.elements.build({type: element["type"], properties: element["properties"]})
        end
        
        sketch
    end
end
