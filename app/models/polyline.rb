class Polyline < ApplicationRecord
    has_one :element, as: :elementable
    accepts_nested_attributes_for :element
end
