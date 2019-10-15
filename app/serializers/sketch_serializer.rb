class SketchSerializer
  include FastJsonapi::ObjectSerializer
  attributes :elements, serializer: ElementSerializer
  has_many :elements, serializer: ElementSerializer
end
