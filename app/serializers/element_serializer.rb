class ElementSerializer
  include FastJsonapi::ObjectSerializer
  attributes :type, :properties, :sketch_id
end
