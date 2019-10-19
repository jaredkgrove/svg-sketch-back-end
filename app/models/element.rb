class Element < ApplicationRecord
    # attributes :elementable
    belongs_to :sketch
    
    belongs_to :elementable, polymorphic: true, dependent: :destroy



end
