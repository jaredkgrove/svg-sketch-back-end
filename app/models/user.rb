class User < ApplicationRecord
    has_secure_password
    has_many :sketches
    validates presence 
end
