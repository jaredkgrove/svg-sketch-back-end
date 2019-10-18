class Element < ApplicationRecord
    belongs_to :sketch
    belongs_to :elementable, polymorphic: true


end
