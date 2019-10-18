class ElementSerializer
  include FastJsonapi::ObjectSerializer
  attributes :elementable, :elementable_type, :sketch_id
end
