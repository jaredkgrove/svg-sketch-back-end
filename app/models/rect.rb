class Rect < ApplicationRecord
    has_one :element, as: :elementable
end
