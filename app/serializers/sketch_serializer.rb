class SketchSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :elements, serializer: ElementSerializer
  link :sketch_url do |object|
    "/sketches/#{object.id}"
  end
end
