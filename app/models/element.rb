class Element < ApplicationRecord
    # attributes :elementable
    belongs_to :sketch, touch: true
    
    belongs_to :elementable, polymorphic: true, dependent: :destroy



end
