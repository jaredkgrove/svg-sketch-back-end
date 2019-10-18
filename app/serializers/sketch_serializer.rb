class SketchSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :elements, serializer: ElementSerializer
end
