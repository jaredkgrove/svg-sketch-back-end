class ElementSerializer
  include FastJsonapi::ObjectSerializer
  attributes :type, :properties
end
